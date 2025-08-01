const defaults = {
  Naruto: {
    main: { name: "Naruto Uzumaki", img: "images/naruto.webp", bio: "Energetic ninja..." },
    episodes: {
      1: { en: "Naruto becomes ninja.", ar: "ناروتو يصبح نينجا." },
      2: { en: "Team 7 is formed.", ar: "تشكيل الفريق 7." },
      3: { en: "Training starts.", ar: "يبدأ التدريب." },
      4: { en: "Mission begins.", ar: "تبدأ المهمة." },
      5: { en: "Zabuza appears.", ar: "ظهور زابوزا." }
    }
  },
  "One Piece": {
    main: {
      name: "Monkey D. Luffy",
      img: "images/luffy.png",
      bio: "Rubber-powered pirate aiming to be Pirate King."
    },
    episodes: {
      1: { en: "Luffy sets sail.", ar: "لوفي يبدأ رحلته." },
      2: { en: "Meet Zoro.", ar: "لقاء زورو." },
      3: { en: "Nami joins crew.", ar: "انضمام نامي." },
      4: { en: "Battle at Baratie.", ar: "معركة في باراتي." },
      5: { en: "Captain fights Mihawk.", ar: "الكابتن يقاتل ميهوك." }
    }
  },
  "Death Note": {
    main: {
      name: "Light Yagami",
      img: "images/light yagami.webp",
      bio: "High school genius who wields the Death Note."
    },
    episodes: {
      1: { en: "Light finds Death Note.", ar: "يجد لايت دفتر الموت." },
      2: { en: "Kira appears.", ar: "ظهور كيرا." },
      3: { en: "L starts investigation.", ar: "إل يبدأ التحقيق." },
      4: { en: "Light confronts L.", ar: "لايت يواجه إل." },
      5: { en: "Near joins case.", ar: "انضمام نير للقضية." }
    }
  },
  "Demon Slayer": {
    main: {
      name: "Tanjiro Kamado",
      img: "images/demon-slayer-paint-by-numbers.jpg",
      bio: "Determined demon slayer protecting his sister."
    },
    episodes: {
      1: { en: "Tanjiro's family attacked.", ar: "عائلة تانجيرو تتعرض لهجوم." },
      2: { en: "Tanjiro begins training.", ar: "تانجيرو يبدأ التدريب." },
      3: { en: "Meet Nezuko.", ar: "لقاء نيزيكو." },
      4: { en: "Fight with demons.", ar: "القتال مع الشياطين." },
      5: { en: "Hashira introduced.", ar: "تعريف الهاشيرا." }
    }
  },
  "Attack on Titan": {
    main: {
      name: "Eren Yeager",
      img: "images/Eren.webp",
      bio: "Vengeful warrior fighting Titans to save humanity."
    },
    episodes: {
      1: { en: "Wall breached by Titans.", ar: "اختراق الجدار من قبل العمالقة." },
      2: { en: "Eren joins Survey Corps.", ar: "إرين ينضم لفيلق الاستطلاع." },
      3: { en: "Battle inside Trost.", ar: "المعركة داخل تروست." },
      4: { en: "Eren transforms.", ar: "إرين يتحول." },
      5: { en: "Titans retreat.", ar: "انسحاب العمالقة." }
    }
  },
"Blue Lock": {
  main: {
    name: "Yoichi Isagi",
    img: "images/isagi.webp", // تأكد إنك حاطت صورة isagi في المجلد images بنفس الاسم
    bio: "Isagi is a smart and skilled striker at Blue Lock."

  },
  episodes: {
    1: {
      en: "Isagi joins Blue Lock with uncertain self-confidence.",
      ar: "ينضم إيساجي إلى بلو لوك وهو غير واثق في نفسه."
    },
    2: {
      en: "He begins to analyze his strengths.",
      ar: "يبدأ بتحليل نقاط قوته."
    },
    3: {
      en: "Isagi faces powerful strikers and learns from failure.",
      ar: "يواجه مهاجمين أقوياء ويتعلم من الفشل."
    },
    4: {
      en: "He develops his spatial awareness and vision.",
      ar: "يطور وعيه المكاني ورؤيته التكتيكية."
    },
    5: {
      en: "Isagi scores a decisive goal and starts embracing his ego.",
      ar: "يسجل هدفًا حاسمًا ويبدأ في تقبّل أنانيته."
    }
  } 
},
  "Hunter x Hunter": {
  main: {
    name: "Gon Freecss",
    img: "images/gon.jpeg",
    bio: "A young boy who embarks on a journey to become a Hunter and find his father."
  },
  episodes: {
    1: { en: "Gon takes the Hunter Exam.", ar: "جون يبدأ اختبار الصيادين." },
    2: { en: "Gon meets Kurapika and Leorio.", ar: "جون يلتقي بكورابيكا وليوريو." },
    3: { en: "Survive the airship challenge.", ar: "البقاء على قيد الحياة في تحدي المنطاد." },
    4: { en: "Trick Tower begins.", ar: "بدء تحدي برج الخداع." },
    5: { en: "Teamwork is tested.", ar: "اختبار العمل الجماعي." }
  }
},


"Bleach": {
  main: {
    name: "Yhwach",
    img: "images/yhwach.jpg",
    bio: "Yhwach is the powerful and fearsome leader of the Quincy. With the ability to see the future and reshape fate, he seeks to rule all worlds."
  },
  episodes: {
    1: {
      en: "Yhwach awakens after centuries of slumber."
    },
    2: {
      en: "He begins uniting the Quincy under his banner."
    },
    3: {
      en: "Yhwach declares war on the Soul Society."
    },
    4: {
      en: "He demonstrates his terrifying powers."
    },
    5: {
      en: "The final battle between Yhwach and Ichigo begins."
    }
  }
},
"Dragon Ball": {
  main: {
    name: "Goku",
    img: "images/goku.webp",
    bio: "Goku is a Saiyan warrior who protects Earth. Known for his cheerful nature and love for battle, he constantly trains to surpass his limits and face powerful foes."
  },
  episodes: {
    1: {
      en: "Goku meets Bulma and begins his journey."
    },
    2: {
      en: "He trains under Master Roshi."
    },
    3: {
      en: "Goku enters the World Martial Arts Tournament."
    },
    4: {
      en: "He learns about his Saiyan heritage."
    },
    5: {
      en: "Goku achieves Super Saiyan for the first time."
    }
  }
},

"Black Clover": {
  main: {
    name: "Asta",
    img: "images/asta.jpeg",
    bio: "A boy born without magic in a world where it's everything."
  },
  episodes: {
    1: { en: "Asta dreams of becoming Wizard King.", ar: "يحلم أستا بأن يصبح إمبراطور السحر." },
    2: { en: "Asta receives a mysterious grimoire.", ar: "يحصل أستا على كتاب تعاويذ غامض." },
    3: { en: "Asta and Yuno face their first challenge.", ar: "يواجه أستا ويونو أول تحدٍ لهما." },
    4: { en: "Asta joins the Black Bulls.", ar: "ينضم أستا إلى فرقة الثيران السوداء." },
    5: { en: "Mission to a haunted dungeon begins.", ar: "تبدأ مهمة في زنزانة مسكونة." }
  }
},
"Vinland Saga": {
  main: {
    name: "Thorfinn",
    img: "images/Thorfinn.webp",
    bio: "A young warrior seeking revenge for his father's death."
  },
  episodes: {
    1: { en: "Thorfinn’s peaceful life ends.", ar: "تنتهي حياة ثورفين السلمية." },
    2: { en: "The Viking raid begins.", ar: "تبدأ غارة الفايكنج." },
    3: { en: "Thors faces Askeladd.", ar: "يواجه ثورز أسكيلاد." },
    4: { en: "Thorfinn joins the mercenaries.", ar: "ينضم ثورفين إلى المرتزقة." },
    5: { en: "Thorfinn grows up on the battlefield.", ar: "ينمو ثورفين في ساحة المعركة." }
  }
},
"Detective Conan": {
  main: {
    name: "Conan Edogawa",
    img: "images/conan.jpeg",
    bio: "A brilliant young detective trapped in a child's body."
  },
  episodes: {
    1: { en: "Shinichi becomes Conan.", ar: "يتحول شينيتشي إلى كونان." },
    2: { en: "First case as a child.", ar: "أول قضية له كطفل." },
    3: { en: "Conan moves in with Ran.", ar: "ينتقل كونان للعيش مع ران." },
    4: { en: "Conan solves a murder at school.", ar: "يحل كونان جريمة قتل في المدرسة." },
    5: { en: "Heiji Hattori makes his debut.", ar: "يظهر هيجي هاتوري لأول مرة." }
  }
}


}

const CHAR_KEY = 'animeChars', EP_KEY = 'episodeComments';

let characters = JSON.parse(localStorage.getItem(CHAR_KEY)) || {};
let episodeComments = JSON.parse(localStorage.getItem(EP_KEY)) || {};

for (let anime in defaults) {
  if (!Array.isArray(characters[anime])) {
    characters[anime] = [defaults[anime].main];
  }
}

function saveAll() {
  localStorage.setItem(CHAR_KEY, JSON.stringify(characters));
  localStorage.setItem(EP_KEY, JSON.stringify(episodeComments));
}

const charCont = document.getElementById('character-container');
const searchInput = document.getElementById('search-input');
const toggleEpisodesBtn = document.getElementById('toggle-episodes-btn');
const episodesSection = document.getElementById('episodes-section');
const episodeSelect = document.getElementById('episode-anime-select');
const episodeList = document.getElementById('episode-list');
const addCharBtn = document.getElementById('add-character-btn');
const charFormSec = document.getElementById('character-form-section');
const charForm = document.getElementById('character-form');
const addEpBtn = document.getElementById('add-episode-btn');
const epFormSec = document.getElementById('episode-form-section');
const epForm = document.getElementById('episode-form');
const darkToggle = document.getElementById('dark-mode-toggle');
const resetBtn = document.getElementById('reset-btn');

// modal
const modalOv = document.getElementById('char-modal-overlay');
const modalImg = document.getElementById('modal-img');
const modalName = document.getElementById('modal-name');
const modalAnime = document.getElementById('modal-anime');
const modalBio = document.getElementById('modal-bio');
const modalClose = document.getElementById('char-modal-close');
const modalCom = document.getElementById('modal-comments');
const modalComForm = document.getElementById('modal-comment-form');
const modalComInp = document.getElementById('modal-comment-input');

function renderChars(filter = '') {
  charCont.innerHTML = '';
  for (let anime in characters) {
    characters[anime].forEach(c => {
      if (c.name.toLowerCase().includes(filter.toLowerCase()) ||
          anime.toLowerCase().includes(filter.toLowerCase())) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => openModal(c, anime);

        const img = document.createElement('img');
        img.src = c.img; img.onerror = () => img.src = 'images/placeholder.png';

        const h = document.createElement('h3'); h.textContent = c.name;
        const pA = document.createElement('p');
        pA.innerHTML = `<strong>Anime:</strong> ${anime}`;
        const pB = document.createElement('p');
        pB.textContent = c.bio;

        const del = document.createElement('button');
        del.className = 'delete-char';
        del.textContent = '✖';
        del.onclick = e => {
          e.stopPropagation();
          const ok = confirm(`⚠️ Delete "${c.name}" from "${anime}"?`);
          if (ok) {
            characters[anime] = characters[anime].filter(x => x.name !== c.name);
            saveAll();
            renderChars(searchInput.value);
          }
        };

        card.append(img, h, pA, pB, del);
        charCont.append(card);
      }
    });
  }
}

function populateEpisodeOptions() {
  episodeSelect.innerHTML = `<option value="">-- Select Anime --</option>`;
  for (let a in defaults) {
    let opt = document.createElement('option');
    opt.value = a; opt.textContent = a;
    episodeSelect.append(opt);
  }
}

function renderEpisodes() {
  episodeList.innerHTML = '';
  const anime = episodeSelect.value;
  if (!defaults[anime]) return;
  const eps = defaults[anime].episodes;

  for (let num in eps) {
    const epDiv = document.createElement('div');
    epDiv.className = 'episode';

    const h3 = document.createElement('h3');
    h3.textContent = `${anime} – Episode ${num}`;

    const p = document.createElement('p');
    p.textContent = eps[num].en;

    const btn = document.createElement('button');
    btn.textContent = 'Show Arabic';
    btn.onclick = () => {
      if (p.textContent === eps[num].en) {
        p.textContent = eps[num].ar;
        btn.textContent = 'Show English';
      } else {
        p.textContent = eps[num].en;
        btn.textContent = 'Show Arabic';
      }
    };

    const epKey = `${anime}-${num}`;
    if (!episodeComments[epKey]) episodeComments[epKey] = [];

    const comSec = document.createElement('div');
    comSec.className = 'comment-section';

    const comCon = document.createElement('div');
    comCon.className = 'comments-container';

    function renderComs() {
      comCon.innerHTML = '';
      episodeComments[epKey].forEach((txt, i) => {
        const dv = document.createElement('div');
        dv.className = 'comment';
        dv.textContent = txt;
        const delBtn = document.createElement('button');
        delBtn.className = 'delete-comment';
        delBtn.textContent = '✖';
        delBtn.onclick = () => {
          episodeComments[epKey].splice(i, 1);
          saveAll();
          renderEpisodes();
        };
        dv.append(delBtn);
        comCon.append(dv);
      });
    }
    renderComs();

    const f = document.createElement('form');
    const inp = document.createElement('input');
    inp.type = 'text'; inp.placeholder = 'Add comment'; inp.required = true;
    const sb = document.createElement('button');
    sb.type = 'submit'; sb.textContent = 'Add';
    f.append(inp, sb);
    f.onsubmit = e => {
      e.preventDefault();
      episodeComments[epKey].push(inp.value.trim());
      saveAll();
      inp.value = '';
      renderComs();
    };

    epDiv.append(h3, p, btn, comSec);
    comSec.append(comCon, f);
    episodeList.append(epDiv);
  }
}

toggleEpisodesBtn.onclick = () => {
  const show = episodesSection.style.display === 'none';
  episodesSection.style.display = show ? 'block' : 'none';
  toggleEpisodesBtn.textContent = show ? 'Hide Episode Conclusions' : 'Show Episode Conclusions';
};

addCharBtn.onclick = () => {
  const show = charFormSec.style.display === 'none';
  charFormSec.style.display = show ? 'block' : 'none';
  epFormSec.style.display = 'none';
};

charForm.onsubmit = e => {
  e.preventDefault();
  const anime = document.getElementById('anime-name').value.trim();
  const name = document.getElementById('character-name').value.trim();
  const imgLink = document.getElementById('image-link').value.trim();
  const bio = document.getElementById('character-bio').value.trim();

  if (!characters[anime]) characters[anime] = [];
  characters[anime].push({ name, img: imgLink, bio });
  saveAll();
  renderChars(searchInput.value);
  charForm.reset();
  charFormSec.style.display = 'none';
};

addEpBtn.onclick = () => {
  const show = epFormSec.style.display === 'none';
  epFormSec.style.display = show ? 'block' : 'none';
};

epForm.onsubmit = e => {
  e.preventDefault();
  const anime = document.getElementById('ep-anime').value.trim();
  const epNum = document.getElementById('ep-number').value.trim();
  const en = document.getElementById('ep-en').value.trim();
  const ar = document.getElementById('ep-ar').value.trim();

  if (!defaults[anime]) defaults[anime] = { main: {}, episodes: {} };
  defaults[anime].episodes[epNum] = { en, ar };
  populateEpisodeOptions();
  renderEpisodes();
  epForm.reset();
  epFormSec.style.display = 'none';
};

darkToggle.onclick = () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark', document.body.classList.contains('dark'));
};

if (localStorage.getItem('dark') === 'true') {
  document.body.classList.add('dark');
}

function resetDefaults() {
  if (confirm('⚠️ This will remove all added characters and episodes and reset to defaults. Continue?')) {
    localStorage.removeItem(CHAR_KEY);
    localStorage.removeItem(EP_KEY);
    characters = {};
    episodeComments = {};
    for (let anime in defaults) characters[anime] = [defaults[anime].main];
    saveAll();
    renderChars('');
    populateEpisodeOptions();
    renderEpisodes();
  }
}

resetBtn.onclick = resetDefaults;

function openModal(c, anime) {
  modalImg.src = c.img;
  modalName.textContent = c.name;
  modalAnime.innerHTML = `<strong>Anime:</strong> ${anime}`;
  modalBio.textContent = c.bio;
  modalCom.innerHTML = '';
  const key = `${anime}|${c.name}`;
  const arr = episodeComments[key] || [];
  arr.forEach((txt, i) => {
    const dv = document.createElement('div');
    dv.textContent = txt;
    const btn = document.createElement('button');
    btn.textContent = '✖';
    btn.onclick = () => {
      arr.splice(i, 1);
      saveAll();
      openModal(c, anime);
    };
    dv.append(btn);
    modalCom.append(dv);
  });
  modalComForm.onsubmit = e => {
    e.preventDefault();
    const v = modalComInp.value.trim();
    if (v) {
      if (!episodeComments[key]) episodeComments[key] = [];
      episodeComments[key].push(v);
      saveAll();
      modalComInp.value = '';
      openModal(c, anime);
    }
  };
  modalOv.style.display = 'flex';
}

modalClose.onclick = () => (modalOv.style.display = 'none');

window.onclick = e => {
  if (e.target === modalOv) modalOv.style.display = 'none';
};

searchInput.oninput = e => renderChars(e.target.value);

episodeSelect.onchange = renderEpisodes;

populateEpisodeOptions();
renderChars();
renderEpisodes();

