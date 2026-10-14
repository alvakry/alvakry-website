(function () {
  var defaults = {
    settings: {
      heroHeadline: {
        en: "I build things the internet deserves.",
        id: "Saya bikin hal-hal yang internet layak dapat."
      },
      heroSubtitle: {
        en: "Designer and developer. I make <strong>interfaces, tools, and bad jokes</strong> — in that order of quality. Powered by caffeine and mild existential dread. The government didn't fund this. Shockingly.",
        id: "Desainer sekaligus developer. Saya bikin <strong>antarmuka, tools, dan lelucon garing</strong> — urutan itu sesuai kualitasnya. Bahan bakar: kafein dan rasa eksistensial yang samar. Tidak disponsori pemerintah. Mengejutkan sekali."
      },
      aboutText: {
        en: "I'm a designer-developer hybrid based in Pekanbaru — a place whose infrastructure I've accepted with the grace of someone who has no other choice.\n\nI spend my time building interfaces that actually work, writing code that doesn't make future-me cry, and occasionally questioning decisions made by people with titles and no accountability.\n\nI believe good design is quiet. Bad governance is loud. I prefer the former.",
        id: "Saya adalah hybrid desainer-developer yang tinggal di Pekanbaru — kota yang infrastrukturnya sudah saya terima dengan keikhlasan orang yang tidak punya pilihan lain.\n\nWaktu saya habis untuk membangun antarmuka yang benar-benar bekerja, menulis kode yang tidak membuat saya menyesal di kemudian hari, dan sesekali mempertanyakan keputusan orang-orang berjabatan yang bebas dari akuntabilitas.\n\nSaya percaya desain yang baik itu senyap. Pemerintahan yang buruk itu berisik. Saya lebih suka yang pertama."
      },
      statusText: {
        en: "online — probably procrastinating",
        id: "online — kemungkinan lagi nunda-nunda kerjaan"
      },
      contactIntro: {
        en: "Open to freelance, full-time, and anything that doesn't require explaining myself to a committee. Reply time: faster than your municipality's permit office.",
        id: "Terbuka untuk freelance, full-time, dan apapun yang tidak mengharuskan saya menjelaskan diri ke sebuah komite. Waktu balas: lebih cepat dari kantor perizinan daerahmu."
      }
    },
    works: [
      {
        id: "orbital-dashboard",
        title: { en: "Orbital Dashboard", id: "Orbital Dashboard" },
        category: { en: "Design & Dev", id: "Desain & Dev" },
        year: "2026",
        description: {
          en: "SaaS analytics — data should look as good as the excuses made from it",
          id: "Analitik SaaS — data harus sebagus alasan yang dibuat darinya"
        },
        body: {
          en: "<p>Orbital Dashboard started as a weekend prototype and turned into a six-month obsession. The brief was simple: make complex analytics readable without making them dishonest. Unlike budget transparency reports, this one actually works.</p><p>The design system is built around information density — every pixel earns its place. Charts are ruthlessly simplified. Filters are surfaced where users actually need them, not buried in a settings panel that loads in 4 seconds like a government website.</p><p>Stack: TypeScript, React, Recharts, a lot of custom SVG, and one regrettable decision involving WebSockets that I will not be discussing further.</p>",
          id: "<p>Orbital Dashboard dimulai sebagai prototipe akhir pekan dan berubah menjadi obsesi enam bulan. Briefnya sederhana: buat analitik kompleks bisa dibaca tanpa membuatnya tidak jujur. Tidak seperti laporan transparansi anggaran, yang ini benar-benar bekerja.</p><p>Sistem desain dibangun di sekitar kepadatan informasi — setiap piksel harus berjasa. Chart disederhanakan tanpa ampun. Filter dimunculkan di tempat pengguna benar-benar membutuhkannya, bukan tersembunyi di panel pengaturan yang loading-nya 4 detik seperti website pemerintah.</p><p>Stack: TypeScript, React, Recharts, banyak SVG custom, dan satu keputusan menyesal soal WebSocket yang tidak akan saya bahas lebih lanjut.</p>"
        },
        tags: ["SaaS", "React", "TypeScript", "Data Viz"]
      },
      {
        id: "voidmarket",
        title: { en: "Voidmarket", id: "Voidmarket" },
        category: { en: "UI / UX", id: "UI / UX" },
        year: "2025",
        description: {
          en: "E-commerce redesign — checkout 3× faster, unlike public services",
          id: "Redesain e-commerce — checkout 3× lebih cepat, tidak seperti pelayanan publik"
        },
        body: {
          en: "<p>Voidmarket's original checkout flow had 7 steps, 3 redirects, and the soul of a DMV queue. The redesign reduced it to 2 steps and a confirmation. Conversion rate went up 40%. The government has been studying this result for 3 years and has submitted a working group proposal.</p><p>The visual language leans dark and editorial — high contrast, generous whitespace, product imagery that doesn't need a filter. Every interaction state was designed before a single line of code was written. A concept that remains novel in certain procurement departments.</p><p>Delivered: full Figma component library, interaction prototype, and a handoff document so detailed the engineers actually liked it. First time for everything.</p>",
          id: "<p>Alur checkout Voidmarket yang asli punya 7 langkah, 3 redirect, dan semangat antrean Disdukcapil. Redesain mereduksinya menjadi 2 langkah dan konfirmasi. Conversion rate naik 40%. Pemerintah sedang mempelajari hasil ini sudah 3 tahun dan telah mengajukan proposal kelompok kerja.</p><p>Bahasa visual yang gelap dan editorial — kontras tinggi, whitespace luas, foto produk yang tidak butuh filter. Setiap interaction state didesain sebelum satu baris kode pun ditulis. Sebuah konsep yang masih terasa baru di departemen pengadaan tertentu.</p><p>Yang diserahkan: full Figma component library, interaction prototype, dan dokumen handoff yang begitu detail sampai para engineer menyukainya. Pertama kali untuk segalanya.</p>"
        },
        tags: ["E-commerce", "Figma", "UX Research", "Conversion"]
      },
      {
        id: "subtext-cli",
        title: { en: "Subtext CLI", id: "Subtext CLI" },
        category: { en: "Engineering", id: "Engineering" },
        year: "2025",
        description: {
          en: "Open-source tool — more transparent than a budget report",
          id: "Tool open-source — lebih transparan dari laporan anggaran negara"
        },
        body: {
          en: "<p>Subtext CLI is a command-line tool for managing content-heavy static sites without a CMS that requires a 6-month procurement process and a dedicated server running Windows Server 2003.</p><p>It processes markdown with frontmatter, generates static HTML, handles i18n, and ships with a development server that hot-reloads. The whole thing is under 800 lines of Node.js. The source is open, the code is commented, and the decisions are explained. Radical transparency, some would say.</p><p>Used in production on three client sites. Zero uptime incidents. More reliable than most infrastructure I didn't build.</p>",
          id: "<p>Subtext CLI adalah tool command-line untuk mengelola situs statis yang konten-heavy tanpa CMS yang membutuhkan proses pengadaan 6 bulan dan server dedicated yang masih pakai Windows Server 2003.</p><p>Tool ini memproses markdown dengan frontmatter, menghasilkan HTML statis, menangani i18n, dan hadir dengan development server yang hot-reload. Semuanya di bawah 800 baris Node.js. Kodenya open, dikomentari, dan keputusannya dijelaskan. Transparansi radikal, kata sebagian orang.</p><p>Dipakai di produksi pada tiga situs klien. Zero insiden uptime. Lebih andal dari sebagian besar infrastruktur yang tidak saya bangun.</p>"
        },
        tags: ["Node.js", "CLI", "Open Source", "Static Sites"]
      },
      {
        id: "ledge",
        title: { en: "Ledge — Mobile Banking UI", id: "Ledge — UI Perbankan Mobile" },
        category: { en: "Product Design", id: "Desain Produk" },
        year: "2024",
        description: {
          en: "Banking app for humans, not bureaucrats",
          id: "Aplikasi perbankan untuk manusia, bukan birokrat"
        },
        body: {
          en: "<p>Ledge was a concept project for a mobile banking app designed around the radical idea that users should understand what is happening to their money. A concept apparently too advanced for several incumbent banks I will not name.</p><p>The UI system is built on accessibility-first principles — WCAG AA throughout, tested with real screen readers, not just theoretically compliant. Every transaction has a clear label, every notification has an off switch, and the settings menu doesn't require a flowchart to navigate.</p><p>The project exists to prove that good fintech UX is a design decision, not a budget one. Prototyped in Figma. 140+ screens. Would have shipped in Q2 if anyone had asked.</p>",
          id: "<p>Ledge adalah proyek konsep untuk aplikasi perbankan mobile yang didesain berdasarkan ide radikal bahwa pengguna seharusnya memahami apa yang terjadi pada uang mereka. Sebuah konsep yang ternyata terlalu canggih bagi beberapa bank incumbent yang tidak akan saya sebutkan namanya.</p><p>Sistem UI dibangun di atas prinsip accessibility-first — WCAG AA di seluruh aplikasi, diuji dengan screen reader nyata, bukan sekadar compliant di atas kertas. Setiap transaksi punya label yang jelas, setiap notifikasi punya tombol off, dan menu pengaturan tidak butuh flowchart untuk dinavigasi.</p><p>Proyek ini ada untuk membuktikan bahwa UX fintech yang baik adalah keputusan desain, bukan anggaran. Diprototipi di Figma. 140+ layar. Seharusnya rilis Q2 kalau ada yang mau bertanya.</p>"
        },
        tags: ["Fintech", "Mobile", "Accessibility", "Figma"]
      }
    ],
    thoughts: [
      {
        id: "redesigned-setup-2am",
        title: {
          en: "Why I redesigned my entire setup at 2am (again)",
          id: "Kenapa saya redesain seluruh setup di jam 2 pagi (lagi)"
        },
        date: "Oct 2026",
        body: {
          en: "<p>There's something about 2am that makes every current configuration feel like a personal failure. The font is wrong. The spacing is wrong. The whole aesthetic is the design equivalent of a budget reallocation — it serves the people who made the decision, not the people who live with it.</p><p>So I rebuilt it. New type scale, new grid, new CSS custom properties structured around actual design tokens instead of vibes. The process took four hours. The result will probably be redesigned in three months. This is called iteration. Or, if you work in government, a five-year plan.</p><p>The lesson, if there is one: systems that aren't documented become folklore. Good folklore, sometimes. But mostly the kind that ends up in a 300-page report nobody reads.</p>",
          id: "<p>Ada sesuatu tentang jam 2 pagi yang membuat setiap konfigurasi yang ada terasa seperti kegagalan pribadi. Fontnya salah. Spacingnya salah. Estetika keseluruhannya adalah versi desain dari realokasi anggaran — melayani orang yang membuat keputusan, bukan orang yang hidup dengannya.</p><p>Jadi saya rebuild semuanya. Type scale baru, grid baru, CSS custom properties baru yang distrukturkan di sekitar design token yang sebenarnya, bukan berdasarkan perasaan. Prosesnya butuh empat jam. Hasilnya mungkin akan didesain ulang dalam tiga bulan. Ini disebut iterasi. Atau, kalau kamu kerja di pemerintahan, namanya program lima tahun.</p><p>Pelajarannya, kalau ada: sistem yang tidak terdokumentasi menjadi folklor. Folklor yang bagus, kadang-kadang. Tapi biasanya yang jenis 300 halaman laporan yang tidak dibaca siapapun.</p>"
        }
      },
      {
        id: "building-things-no-one-asked",
        title: {
          en: "On building things no one asked for but everyone needed",
          id: "Tentang membangun hal yang tidak diminta tapi semua orang butuhkan"
        },
        date: "Aug 2026",
        body: {
          en: "<p>The best tools I've used were built by someone who was annoyed. Not funded, not commissioned — annoyed. There's a specific kind of clarity that comes from solving a problem you actually have, rather than one you've been assigned to have by a steering committee.</p><p>Most of the tools I've shipped started as private scripts or Figma hacks. Subtext CLI began as a bash script I wrote because the alternative was a CMS with a 47-page manual. The script had comments. The manual did not have answers.</p><p>I think about this whenever I see a government digital service. Someone commissioned it. Someone approved the wireframes. Someone signed off on the font choice (Arial, always Arial). Nobody who uses it was annoyed enough to build something better. And that is the gap where all the bad UX lives.</p>",
          id: "<p>Tool terbaik yang pernah saya gunakan dibangun oleh seseorang yang kesal. Bukan difunding, bukan dicommission — kesal. Ada kejelasan tertentu yang datang dari memecahkan masalah yang benar-benar kamu miliki, bukan masalah yang telah ditugaskan kepadamu oleh steering committee.</p><p>Sebagian besar tool yang saya kirim dimulai sebagai skrip pribadi atau hack Figma. Subtext CLI dimulai sebagai skrip bash yang saya tulis karena alternatifnya adalah CMS dengan manual 47 halaman. Skripnya punya komentar. Manualnya tidak punya jawaban.</p><p>Saya memikirkan ini setiap kali melihat layanan digital pemerintah. Seseorang mencommission-nya. Seseorang menyetujui wireframe-nya. Seseorang menandatangani pilihan font-nya (Arial, selalu Arial). Tidak ada yang menggunakannya cukup kesal untuk membangun sesuatu yang lebih baik. Dan itulah celah di mana semua UX buruk tinggal.</p>"
        }
      },
      {
        id: "budget-allocation-figma",
        title: {
          en: "Budget allocation, explained with a Figma file",
          id: "Alokasi anggaran negara, dijelaskan lewat file Figma"
        },
        date: "May 2026",
        body: {
          en: "<p>I made a Figma file once. It had a clear hierarchy, proper naming conventions, consistent components, and a design system that a new contributor could understand in under 10 minutes. This is not what government budgets look like.</p><p>Government budget documents are designed to be incomprehensible. Not accidentally — the complexity is the feature. If you can't read the document, you can't question the line item. If you can't question the line item, the travel budget survives another fiscal year intact. I respect the craft, even as I resent the outcome.</p><p>Good information design is an act of accountability. A chart that is hard to read is a decision, not an accident. Next time you see a 'transparent' budget that requires a decoder ring, ask who benefits from the confusion. Spoiler: not you.</p>",
          id: "<p>Saya pernah membuat file Figma. Ada hierarki yang jelas, konvensi penamaan yang tepat, komponen yang konsisten, dan design system yang bisa dipahami kontributor baru dalam waktu 10 menit. Ini bukan seperti anggaran pemerintah.</p><p>Dokumen anggaran pemerintah dirancang untuk tidak bisa dipahami. Bukan secara kebetulan — kompleksitasnya adalah fiturnya. Kalau kamu tidak bisa membaca dokumen, kamu tidak bisa mempertanyakan pos anggarannya. Kalau kamu tidak bisa mempertanyakan pos anggarannya, anggaran perjalanan dinas bertahan satu tahun fiskal lagi utuh. Saya menghormati keahliannya, meski membenci hasilnya.</p><p>Desain informasi yang baik adalah tindakan akuntabilitas. Chart yang susah dibaca adalah keputusan, bukan kecelakaan. Lain kali kamu melihat anggaran 'transparan' yang butuh kode rahasia, tanya siapa yang diuntungkan dari kebingungan itu. Spoiler: bukan kamu.</p>"
        }
      },
      {
        id: "launched-vs-done",
        title: {
          en: "The gap between \"launched\" and \"done\" is where I live",
          id: "Jarak antara \"sudah rilis\" dan \"selesai\" adalah tempat tinggal saya"
        },
        date: "Jan 2026",
        body: {
          en: "<p>Launched means it's live. Done means it's right. These are not the same place and the distance between them is where most projects go to deteriorate slowly, like a public park after the inauguration photo.</p><p>I've shipped things I'm proud of. I've also shipped things under deadline pressure that I immediately started planning how to fix. The ratio is better than it used to be, which is either progress or lower standards. I choose to believe it's progress.</p><p>The honest version: done doesn't exist. There is only the current version and the next version. Good craft is knowing which things to carry forward and which to leave in the archive, labeled clearly so future-you can understand the decision. Unlike certain legislative records.</p>",
          id: "<p>Rilis artinya sudah live. Selesai artinya sudah benar. Ini bukan tempat yang sama dan jarak di antaranya adalah di mana sebagian besar proyek pergi untuk memburuk perlahan, seperti taman publik setelah foto peresmian.</p><p>Saya pernah merilis hal-hal yang saya banggakan. Saya juga pernah merilis hal-hal di bawah tekanan deadline yang langsung saya rencanakan cara memperbaikinya. Rasionya lebih baik dari sebelumnya, yang bisa jadi kemajuan atau standar yang lebih rendah. Saya memilih untuk percaya itu kemajuan.</p><p>Versi jujurnya: selesai itu tidak ada. Yang ada hanya versi saat ini dan versi berikutnya. Keahlian yang baik adalah mengetahui hal-hal mana yang dibawa ke depan dan mana yang ditinggalkan di arsip, diberi label yang jelas agar diri-masa-depanmu bisa memahami keputusannya. Tidak seperti catatan legislatif tertentu.</p>"
        }
      },
      {
        id: "serif-vs-sans",
        title: {
          en: "Serif vs. sans-serif: a war more civil than parliament",
          id: "Serif vs. sans-serif: perang yang lebih beradab dari parlemen"
        },
        date: "Sep 2025",
        body: {
          en: "<p>The serif vs. sans-serif debate has been ongoing since the 1920s. It has produced more nuanced argument, more careful evidence, and more good-faith disagreement than a parliamentary session on infrastructure spending. Make of that what you will.</p><p>My position: it depends. It always depends. Serifs carry authority and historical weight — good for long reads, bad for interfaces that need to feel immediate. Sans-serifs are neutral, scalable, forgettable in the best way — good for UI, bad for editorial work that needs a voice.</p><p>The real answer is that typeface choice is a communication decision, not an aesthetic one. It says something about who you think is reading and what you want them to feel. The government's answer to this is always Arial 11pt, black on white, 40% letter-spacing. I think that also says something.</p>",
          id: "<p>Debat serif vs. sans-serif sudah berlangsung sejak 1920-an. Debat ini menghasilkan argumen yang lebih bernuansa, bukti yang lebih hati-hati, dan ketidaksetujuan yang lebih itikad baik daripada sesi parlemen tentang belanja infrastruktur. Tafsirkan itu sesukamu.</p><p>Posisi saya: tergantung. Selalu tergantung. Serif membawa otoritas dan bobot historis — bagus untuk bacaan panjang, buruk untuk antarmuka yang perlu terasa segera. Sans-serif netral, scalable, terlupakan dengan cara terbaik — bagus untuk UI, buruk untuk karya editorial yang butuh suara.</p><p>Jawaban sebenarnya adalah pilihan typeface adalah keputusan komunikasi, bukan estetika. Itu mengatakan sesuatu tentang siapa menurutmu yang membaca dan apa yang kamu inginkan mereka rasakan. Jawaban pemerintah untuk ini selalu Arial 11pt, hitam di atas putih, letter-spacing 40%. Saya pikir itu juga mengatakan sesuatu.</p>"
        }
      }
    ]
  };

  try {
    var saved = localStorage.getItem('alvakry_data');
    if (saved) {
      window.PORTFOLIO_DATA = JSON.parse(saved);
      return;
    }
  } catch (e) {}

  window.PORTFOLIO_DATA = defaults;
})();
