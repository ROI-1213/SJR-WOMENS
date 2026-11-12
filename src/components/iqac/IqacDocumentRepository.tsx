import { useState } from 'react';
import { ArrowUpRight, Download, FileBadge, FileText, Search } from 'lucide-react';
import { iqacDocumentGroups, iqacDownloadUrl, type IqacDocument } from '@/data/iqac';

const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#177249]';
const filterStyle = `h-11 w-full rounded-lg border border-[#177249]/30 bg-white text-sm text-[#153b2a] ${focusRing}`;

const normalizeSearch = (text: string) => text.toLowerCase().replace(/[–—]/g, '-').trim();

const DocumentCard = ({ document }: { document: IqacDocument }) => {
  const { title, href, year, format } = document;
  const name = [title, year].filter(Boolean).join(' ');
  const Icon = format === 'PDF' ? FileText : FileBadge;

  return (
    <article className="flex h-full flex-col rounded-xl border border-[#177249]/15 bg-white p-4 shadow-sm transition-colors hover:border-[#177249]/40 sm:p-5">
      <div className="flex flex-1 items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg border-b-2 border-[#ff8c00] bg-[#177249]/10 text-[#177249]">
          <Icon size={20} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold text-[#177249]">{year ? `${year} · ${format}` : format}</p>
          <h4 className="mt-1 font-bold leading-snug text-[#153b2a]">{title}</h4>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[#177249]/10 pt-3">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${name} (${format}, opens in a new tab)`}
          className={`inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#177249] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#135c3b] ${focusRing}`}
        >
          {format === 'PDF' ? 'View PDF' : 'View image'} <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          href={iqacDownloadUrl(document)}
          download
          aria-label={`Download ${name} (${format})`}
          className={`inline-flex min-h-10 items-center gap-1.5 rounded-md border border-[#177249]/25 px-3 py-2 text-xs font-semibold text-[#177249] transition-colors hover:bg-[#177249]/5 ${focusRing}`}
        >
          <Download size={14} aria-hidden="true" /> {format === 'PDF' ? 'Download PDF' : 'Download image'}
        </a>
      </div>
    </article>
  );
};

export const IqacDocumentRepository = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const searchTerms = normalizeSearch(query).split(/\s+/).filter(Boolean);
  const hasFilters = Boolean(category || searchTerms.length);
  const groups = iqacDocumentGroups
    .filter(group => !category || group.id === category)
    .map(group => ({
      ...group,
      documents: group.documents.filter(({ title, year, format }) => {
        const fullYear = year?.replace(/–(\d{2})$/, '–20$1');
        const searchable = normalizeSearch([group.label, title, year, fullYear, format].join(' '));
        return searchTerms.every(term => searchable.includes(term));
      }),
    }))
    .filter(group => group.documents.length > 0);
  const resultCount = groups.reduce((count, group) => count + group.documents.length, 0);

  const resetFilters = () => {
    setQuery('');
    setCategory('');
  };

  return (
    <section id="iqac-documents" aria-labelledby="iqac-documents-title" className="scroll-mt-20 border-t border-[#177249]/15 bg-[#177249]/5 py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <h2 id="iqac-documents-title" className="text-3xl font-bold tracking-tight text-[#153b2a] sm:text-4xl">Document repository</h2>
          <p className="mt-3 leading-relaxed text-neutral-700">Browse original IQAC records by category, or search by document title and academic year.</p>
        </div>

        <div role="search" aria-label="Search IQAC documents" className="mt-6 grid items-end gap-3 rounded-xl border border-[#177249]/15 bg-white p-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,0.66fr)] sm:p-5">
          <label className="min-w-0 text-sm font-semibold text-[#153b2a]">
            Search documents
            <span className="relative mt-1.5 block">
              <Search className="pointer-events-none absolute left-3 top-3.5 text-[#177249]" size={17} aria-hidden="true" />
              <input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="e.g. AQAR 2021–22" className={`${filterStyle} pl-9 pr-3 font-normal`} />
            </span>
          </label>
          <label className="min-w-0 text-sm font-semibold text-[#153b2a]">
            Document category
            <select value={category} onChange={event => setCategory(event.target.value)} className={`${filterStyle} mt-1.5 px-2.5 font-normal`}>
              <option value="">All categories</option>
              {iqacDocumentGroups.map(group => <option key={group.id} value={group.id}>{group.label}</option>)}
            </select>
          </label>
          <div className="flex items-center justify-between gap-3 text-sm sm:col-span-2">
            <p role="status" className="text-neutral-700">{resultCount} {resultCount === 1 ? 'document' : 'documents'}{hasFilters ? ' found' : ''}</p>
            {hasFilters && (
              <button type="button" onClick={resetFilters} className={`rounded-sm font-semibold text-[#177249] underline underline-offset-4 ${focusRing}`}>
                Clear filters
              </button>
            )}
          </div>
        </div>

        {resultCount === 0 && <p className="mt-6 rounded-xl border border-[#177249]/15 bg-white p-5 leading-relaxed text-neutral-700">No documents match your filters. Try a different title or academic year.</p>}

        <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
          {groups.map(group => (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-title`}
              className={group.id === 'aqar'
                ? 'scroll-mt-20 rounded-2xl border-t-4 border-[#ff8c00] bg-[#153b2a] p-4 sm:p-7'
                : 'scroll-mt-20 border-t border-[#177249]/15 pt-6 sm:pt-8'}
            >
              <h3 id={`${group.id}-title`} className={`text-xl font-bold tracking-tight sm:text-2xl ${group.id === 'aqar' ? 'text-white' : 'text-[#153b2a]'}`}>{group.heading}</h3>
              <p className={`mt-2 max-w-3xl text-sm leading-relaxed ${group.id === 'aqar' ? 'text-white/90' : 'text-neutral-700'}`}>{group.description}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
                {group.documents.map(document => <DocumentCard key={document.href} document={document} />)}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};
