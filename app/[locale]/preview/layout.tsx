export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="preview-mode">
      <div className="preview-banner">プレビューモード</div>
      {children}
    </div>
  );
}
