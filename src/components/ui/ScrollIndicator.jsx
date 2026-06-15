// Premium scroll cue: an outlined mouse with a drifting wheel dot + label.
export default function ScrollIndicator({ label = 'Scroll' }) {
  return (
    <div className="scroll-cue" aria-hidden="true">
      <span className="scroll-cue__mouse">
        <span className="scroll-cue__wheel" />
      </span>
      <span className="scroll-cue__label">{label}</span>
    </div>
  );
}
