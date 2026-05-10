function MediaCard({ title, media, children }) {
  return (
    <article className="media-card">
      <div className="media-preview">{media}</div>
      <div className="media-copy">
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default MediaCard;
