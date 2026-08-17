import { useId, useState, type KeyboardEvent, type ReactNode } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  /** Uncontrolled initial tab. */
  defaultActiveId?: string;
  /** Controlled active tab (with onSelect). */
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
}

/**
 * Accessible tabs (04 §65 category navigation, §68). Implements the tabs
 * pattern: `tablist`/`tab`/`tabpanel` roles, `aria-selected`/`aria-controls`,
 * arrow-key + Home/End navigation. Supports controlled and uncontrolled use.
 */
export function Tabs({ tabs, defaultActiveId, activeId: controlledId, onSelect, className = '' }: TabsProps) {
  const [internalId, setInternalId] = useState(defaultActiveId ?? tabs[0]?.id);
  const activeId = controlledId ?? internalId;
  const labelIdBase = useId();

  if (tabs.length === 0) {
    return null;
  }

  const select = (id: string) => {
    if (onSelect) {
      onSelect(id);
    } else {
      setInternalId(id);
    }
  };

  const currentIndex = tabs.findIndex((tab) => tab.id === activeId);
  const activeTab = tabs[currentIndex >= 0 ? currentIndex : 0];

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const last = tabs.length - 1;
    const nextIndex = currentIndex >= 0 ? currentIndex : 0;
    let target: string | undefined;
    if (event.key === 'ArrowRight') target = tabs[(nextIndex + 1) % tabs.length].id;
    else if (event.key === 'ArrowLeft') target = tabs[(nextIndex - 1 + tabs.length) % tabs.length].id;
    else if (event.key === 'Home') target = tabs[0].id;
    else if (event.key === 'End') target = tabs[last].id;
    if (target) {
      event.preventDefault();
      select(target);
    }
  };

  return (
    <div className={className}>
      <div role="tablist" aria-label="Tabs" onKeyDown={onKeyDown} className="flex flex-wrap gap-1 border-b border-slate-200">
        {tabs.map((tab) => {
          const selected = tab.id === activeTab.id;
          const tabId = `${labelIdBase}-${tab.id}`;
          return (
            <button
              key={tab.id}
              id={tabId}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${tabId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => select(tab.id)}
              className={`-mb-px border-b-2 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-1 ${
                selected ? 'border-blue-600 text-slate-900' : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        id={`${labelIdBase}-${activeTab.id}-panel`}
        role="tabpanel"
        aria-labelledby={`${labelIdBase}-${activeTab.id}`}
        tabIndex={0}
        className="pt-6"
      >
        {activeTab.content}
      </div>
    </div>
  );
}