'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const riderSections = [
  {
    title: 'Audio Equipment',
    items: [
      'Pioneer DJM-900NXS2 or equivalent mixer',
      'Pioneer CDJ-3000 or equivalent',
      'Subwoofer (min. 18")',
      'Wireless in-ear monitoring system',
    ],
  },
  {
    title: 'Booth Setup',
    items: [
      'Raised DJ booth (minimum 1.5m height)',
      'Adequate lighting for equipment visibility',
      'Climate control (ventilation/cooling)',
    ],
  },
  {
    title: 'Hospitality',
    items: [
      'Rider provision: soft drinks, water, snacks',
      'VIP access for guest(s)',
      'Parking access',
      'Soundcheck time (30 minutes)',
    ],
  },
];

export function TechnicalRider() {
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  return (
    <section className="border-t border-border px-4 py-12">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
          Technical Rider
        </h2>
        <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">
          Production Standards & Hospitality
        </p>
      </div>

      <div className="space-y-3">
        {riderSections.map((section, idx) => (
          <div key={idx} className="border border-border bg-card rounded overflow-hidden">
            <button
              onClick={() =>
                setExpandedSection(expandedSection === idx ? null : idx)
              }
              className="w-full flex items-center justify-between px-4 py-3 transition-colors duration-200 hover:bg-muted"
            >
              <h3 className="text-sm font-semibold text-foreground">
                {section.title}
              </h3>
              <ChevronDown
                className={`h-4 w-4 text-accent transition-transform duration-200 ${expandedSection === idx ? 'rotate-180' : ''
                  }`}
              />
            </button>

            {expandedSection === idx && (
              <div className="border-t border-border bg-muted/30 px-4 py-3">
                <ul className="space-y-2">
                  {section.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex gap-2 text-xs text-muted-foreground"
                    >
                      <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 rounded border border-accent/30 bg-accent/5 px-4 py-4">
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">Contact: </span>
          abletonuserid@gmail.com
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">WhatsApp </span>
          +573507482102
        </p>
      </div>
    </section>
  );
}
