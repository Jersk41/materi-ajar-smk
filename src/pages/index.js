import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const kelasLinks = [
  {
    title: 'Kelas X',
    desc: 'Dasar-dasar PPLG dan Koding AI tingkat awal.',
    to: '/X/Dasar-Dasar_PPLG/Dasar_Algoritma_dan_Pemrograman',
  },
  {
    title: 'Kelas XI',
    desc: 'Materi lanjutan Koding AI dan Web Programming.',
    to: '/XI/Koding_dan_AI/Pengenalan_AI_dan_Python',
  },
  {
    title: 'Kelas XII',
    desc: 'Materi tingkat akhir dan penguatan proyek.',
    to: '/XII/Github Users XII-RPL',
  },
];

export default function Home() {
  return (
    <Layout title="Materi Ajar" description="Pilih materi berdasarkan jenjang kelas">
      <main className="container margin-vert--xl">
        <div className="text--center margin-bottom--xl">
          <h1>Materi Ajar</h1>
          <p>Pilih jenjang kelas untuk mulai belajar.</p>
        </div>

        <div className="row">
          {kelasLinks.map((item) => (
            <div key={item.title} className="col col--4 margin-bottom--lg">
              <div className="card">
                <div className="card__header">
                  <h3>{item.title}</h3>
                </div>
                <div className="card__body">
                  <p>{item.desc}</p>
                </div>
                <div className="card__footer">
                  <Link className="button button--primary button--block" to={item.to}>
                    Buka Materi
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  );
}
