
import React from 'react';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-10 border-l-4 border-slate-800 pl-6 py-2">
    <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-4 uppercase">{title}</h2>
    <div className="text-lg leading-relaxed text-slate-700">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6 md:p-12 lg:p-20">
      <main className="max-w-3xl w-full">
        <header className="mb-16 border-b-8 border-slate-900 pb-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-2">
            Dorothea Quarry
          </h1>
          <p className="text-xl font-medium text-slate-600">Information, Safety & Heritage Guidance</p>
        </header>

        <div className="prose prose-slate max-w-none">
          <p className="text-xl leading-relaxed text-slate-800 mb-12">
            Dorothea Quarry is a former industrial site of significant historical and geological importance. 
            The landscape remains in a state of natural transition and contains a variety of natural and 
            man-made hazards that require visitors to exercise caution and personal responsibility at all times.
          </p>

          <Section title="Safety & Hazards">
            <p className="mb-4">Visitors must be aware of the following significant risks inherent to the site:</p>
            <ul className="list-disc space-y-3 ml-4">
              <li><strong>Unstable Terrain:</strong> Loose rock faces, scree slopes, and sudden drops are present throughout the site. Rocks may fall without warning.</li>
              <li><strong>Deep Water:</strong> The quarry pits contain extremely deep, cold water. Submerged hazards, unseen currents, and sudden depth changes pose a critical risk of drowning or cold-water shock.</li>
              <li><strong>Structural Decay:</strong> Former industrial buildings and machinery are in varying states of collapse. Falling debris and unstable masonry are present.</li>
              <li><strong>Changing Conditions:</strong> Weather conditions can change rapidly, significantly altering the stability of paths and visibility across the site.</li>
            </ul>
          </Section>

          <Section title="Access & Movement">
            <ul className="list-disc space-y-3 ml-4">
              <li><strong>Established Paths:</strong> For your own safety and to prevent erosion, please remain on clearly established walking tracks.</li>
              <li><strong>Prohibited Climbing:</strong> Do not attempt to climb rock faces or enter industrial structures. These are not maintained for public access.</li>
              <li><strong>Signage & Barriers:</strong> All perimeter fences, warning signs, and barriers are placed for public protection. Do not circumvent or tamper with any safety infrastructure.</li>
            </ul>
          </Section>

          <Section title="Environment & Wildlife">
            <p className="mb-4">
              The quarry has become a vital habitat for various species. Many of the flora and fauna found 
              here are protected under conservation legislation.
            </p>
            <ul className="list-disc space-y-3 ml-4">
              <li><strong>Leave No Trace:</strong> Ensure all waste is taken with you. Do not leave litter or modify the environment (e.g., building cairns or fires).</li>
              <li><strong>Protected Species:</strong> Disturbing nesting birds or rare botanical specimens is an offence. Please keep noise to a minimum.</li>
            </ul>
          </Section>

          <Section title="Heritage & Respect">
            <p className="mb-4">
              Dorothea Quarry is a site of international industrial archaeology. The remaining structures 
              are part of North Wales&rsquo; rich slate-mining history.
            </p>
            <p>
              Please treat all historical features with respect. Do not remove any materials, stones, or 
              artifacts from the site. Preservation of this heritage depends on the consideration of every visitor.
            </p>
          </Section>

          <div className="mt-16 bg-slate-900 text-white p-8 rounded-sm shadow-xl">
            <h2 className="text-2xl font-bold uppercase mb-4 tracking-wider flex items-center">
              <span className="bg-red-600 px-2 py-1 mr-3 text-sm rounded">CRITICAL</span>
              Emergency Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">Actions</p>
                <p className="text-3xl font-black">DIAL 999</p>
                <p className="text-lg mt-1 text-slate-300">Request Police & Mountain Rescue</p>
              </div>
              <div>
                <p className="text-slate-400 text-sm uppercase font-bold tracking-widest mb-1">Location Details</p>
                <p className="text-xl font-bold">Dorothea Quarry</p>
                <p className="text-lg text-slate-300">Talysarn, Gwynedd</p>
                <p className="text-md text-slate-300 mt-2 font-mono">LL54 6AL (Nearest Postcode)</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 pt-8 border-t border-slate-200 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4 no-print">
          <p>&copy; Dorothea Quarry Informational Site</p>
          <div className="flex gap-6">
            <span className="italic">Safety First. Leave No Trace.</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
