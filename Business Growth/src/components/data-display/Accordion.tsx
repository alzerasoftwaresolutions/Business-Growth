import { useId, useState, type ReactNode } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  /** Allow multiple panels open at once (default single). */
  allowMultiple?: boolean;
  /** Uncontrolled initially-open ids. */
  defaultOpenIds?: string[];
  className?: string;
}

/**
 * Accessible accordion / disclosure (04 §68, §67 FAQ). Each button toggles
 * its own panel with `aria-expanded`/`aria-controls`; important information is
 * never hidden behind accordions unless the approved UI requires it.
 */
export function Accordion({ items, allowMultiple = false, defaultOpenIds = [], className = '' }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);
  const baseId = useId();

  const toggle = (id: string) => {
    setOpenIds((current) => {
      if (current.includes(id)) {
        return current.filter((open) => open !== id);
      }
      return allowMultiple ? [...current, id] : [id];
    });
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <div className={`divide-y divide-slate-200 border-y border-slate-200 ${className}`}>
      {items.map((item) => {
        const open = openIds.includes(item.id);
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.title}
                <span aria-hidden="true" className="text-slate-400">
                  {open ? '−' : '+'}
                </span>
              </button>
            </h3>
            {open ? (
              <div id={panelId} className="pb-4 text-sm text-slate-600">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}