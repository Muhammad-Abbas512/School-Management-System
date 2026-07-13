  lucide.createIcons();

    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    document.getElementById('open-sidebar').addEventListener('click', () => {
      sidebar.classList.add('open');
      overlay.classList.remove('hidden');
    });
    document.getElementById('close-sidebar').addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.add('hidden');
    }

    document.getElementById('collapse-toggle').addEventListener('click', () => {
      document.body.classList.toggle('collapsed');
    });

    const profileBtn = document.getElementById('profile-btn');
    const profileMenu = document.getElementById('profile-menu');
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => profileMenu.classList.add('hidden'));

       document.getElementById('dark-toggle').addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      const icon = this.querySelector('i');
      const isDark = document.documentElement.classList.contains('dark');
      icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      lucide.createIcons();
    });


    function toast(msg) {
      const el = document.createElement('div');
      el.className = 'fixed bottom-5 right-5 z-[60] bg-ink text-white text-sm font-medium px-4 py-3 rounded-btn shadow-soft';
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2200);
    }
    function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
    function closeModal(id) { document.getElementById(id).classList.add('hidden'); }


    const rosters = {
      '10-A': [['Amina Khalid', '10-A-14', 25], ['Hamza Tariq', '10-A-02', 51], ['Noman Sheikh', '10-A-19', 8], ['Rida Fatima', '10-A-05', 44]],
      '9-B': [['Bilal Ahmed', '9-B-07', 33], ['Zainab Farooq', '9-B-25', 9], ['Owais Ejaz', '9-B-11', 22]],
      '8-C': [['Fatima Noor', '8-C-22', 45], ['Ali Raza', '8-C-06', 15]],
      '7-A': [['Sara Iqbal', '7-A-19', 47], ['Hassan Butt', '7-A-03', 30]],
    };
    let marks = {};
    function renderAttendance() {
      const cls = document.getElementById('attClass').value;
      const tbody = document.getElementById('att-tbody');
      tbody.innerHTML = '';
      const list = rosters[cls] || [];
      list.forEach(([name, roll, img]) => {
        if (!(roll in marks)) marks[roll] = 'Present';
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td class="py-3 px-5"><div class="flex items-center gap-3"><img src="https://i.pravatar.cc/64?img=${img}" class="w-8 h-8 rounded-full" /><span class="font-medium">${name}</span></div></td>
          <td class="py-3 px-3 text-muted">${roll}</td>
          <td class="py-3 px-3 pr-5 text-right">
            <div class="inline-flex rounded-btn border border-line overflow-hidden text-xs font-semibold">
              <button onclick="setMark('${roll}','Present')" data-roll="${roll}" data-val="Present" class="markBtn px-3 py-1.5 ${marks[roll] === 'Present' ? 'bg-success text-white' : 'text-muted hover:bg-bg'}">Present</button>
              <button onclick="setMark('${roll}','Late')" data-roll="${roll}" data-val="Late" class="markBtn px-3 py-1.5 border-l border-line ${marks[roll] === 'Late' ? 'bg-warning text-white' : 'text-muted hover:bg-bg'}">Late</button>
              <button onclick="setMark('${roll}','Absent')" data-roll="${roll}" data-val="Absent" class="markBtn px-3 py-1.5 border-l border-line ${marks[roll] === 'Absent' ? 'bg-danger text-white' : 'text-muted hover:bg-bg'}">Absent</button>
            </div>
          </td>`;
        tbody.appendChild(tr);
      });
      updateCounts();
    }
    function setMark(roll, val) { marks[roll] = val; renderAttendance(); }
    function updateCounts() {
      const vals = Object.values(marks);
      document.getElementById('presCount').textContent = vals.filter(v => v === 'Present').length;
      document.getElementById('absCount').textContent = vals.filter(v => v === 'Absent').length;
      document.getElementById('lateCount').textContent = vals.filter(v => v === 'Late').length;
    }
    renderAttendance();

    lucide.createIcons();
