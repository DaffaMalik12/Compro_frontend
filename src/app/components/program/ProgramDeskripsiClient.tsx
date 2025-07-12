'use client';

export default function ProgramDeskripsiClient({ html }: { html: string }) {
  return (
    <div
      className="text-gray-600 text-sm line-clamp-3 text-left"
      dangerouslySetInnerHTML={{ __html: html || '' }}
    />
  );
}
