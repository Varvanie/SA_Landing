import Zone1 from '../Zone1/Zone1';
import Zone2 from '../Zone2/Zone2';
import './SV_Zone.css';

export default function SV_Zone() {
  return (
    <section className="sv-zone">
      <Zone1 />
      <Zone2 />
    </section>
  );
}