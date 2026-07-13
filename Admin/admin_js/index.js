 lucide.createIcons();

    // ---- Sidebar mobile toggle ----
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

    // ---- Sidebar collapse (desktop) ----
    document.getElementById('collapse-toggle').addEventListener('click', () => {
      document.body.classList.toggle('collapsed');
    });

    // ---- Profile dropdown ----
    const profileBtn = document.getElementById('profile-btn');
    const profileMenu = document.getElementById('profile-menu');
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => profileMenu.classList.add('hidden'));

    // ---- Dark mode toggle (visual only) ----
    document.getElementById('dark-toggle').addEventListener('click', function () {
      document.documentElement.classList.toggle('dark');
      const icon = this.querySelector('i');
      const isDark = document.documentElement.classList.contains('dark');
      icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      lucide.createIcons();
    });

    // ---- Charts ----
    const chartFont = { family: 'Inter', size: 11 };
    Chart.defaults.font = chartFont;
    Chart.defaults.color = '#64748B';

    new Chart(document.getElementById('attendanceChart'), {
      type: 'line',
      data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
          data: [88, 92, 90, 95, 94, 91, 94],
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37,99,235,0.08)',
          fill: true,
          tension: 0.4,
          pointRadius: 3,
          pointBackgroundColor: '#2563EB',
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 80, max: 100, grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        },
        maintainAspectRatio: false
      }
    });

    new Chart(document.getElementById('feeChart'), {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun'],
        datasets: [{
          data: [12000, 15500, 14200, 16800, 17300, 18250],
          backgroundColor: '#2563EB',
          borderRadius: 6,
          maxBarThickness: 32,
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        },
        maintainAspectRatio: false
      }
    });

    new Chart(document.getElementById('admissionsChart'), {
      type: 'line',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
          data: [40, 65, 55, 90, 120, 100, 140],
          borderColor: '#22C55E',
          backgroundColor: 'rgba(34,197,94,0.1)',
          fill: true,
          tension: 0.4,
          pointRadius: 0,
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: '#E2E8F0' } },
          x: { grid: { display: false } }
        },
        maintainAspectRatio: false
      }
    });

    // ---- Recent students table (mock data) ----
    const students = [
      { name: 'Amina Khalid', roll: '10-A-14', cls: '10-A', phone: '+92 300 1234567', status: 'Present', img: 25 },
      { name: 'Bilal Ahmed', roll: '9-B-07', cls: '9-B', phone: '+92 301 7654321', status: 'Present', img: 33 },
      { name: 'Fatima Noor', roll: '8-C-22', cls: '8-C', phone: '+92 302 9988776', status: 'Absent', img: 45 },
      { name: 'Hamza Tariq', roll: '10-A-02', cls: '10-A', phone: '+92 303 4455667', status: 'Present', img: 51 },
      { name: 'Sara Iqbal', roll: '7-A-19', cls: '7-A', phone: '+92 304 1122334', status: 'Late', img: 47 },
    ];
    const statusStyle = {
      Present: 'bg-success/10 text-success',
      Absent: 'bg-danger/10 text-danger',
      Late: 'bg-warning/10 text-warning',
    };
    const tbody = document.getElementById('students-tbody');
    students.forEach(s => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-bg';
      tr.innerHTML = `
        <td class="py-3 px-5">
          <div class="flex items-center gap-3">
            <img src="https://i.pravatar.cc/64?img=${s.img}" class="w-8 h-8 rounded-full" />
            <span class="font-medium text-ink whitespace-nowrap">${s.name}</span>
          </div>
        </td>
        <td class="py-3 px-3 text-muted whitespace-nowrap">${s.roll}</td>
        <td class="py-3 px-3 text-muted whitespace-nowrap">${s.cls}</td>
        <td class="py-3 px-3 text-muted whitespace-nowrap hidden sm:table-cell">${s.phone}</td>
        <td class="py-3 px-3"><span class="text-xs font-semibold px-2.5 py-1 rounded-full ${statusStyle[s.status]}">${s.status}</span></td>
        <td class="py-3 px-5 text-right">
          <div class="inline-flex items-center gap-1 text-muted">
            <button class="w-7 h-7 flex items-center justify-center hover:text-primary hover:bg-primary/10 rounded-md"><i data-lucide="eye" class="w-3.5 h-3.5"></i></button>
            <button class="w-7 h-7 flex items-center justify-center hover:text-success hover:bg-success/10 rounded-md"><i data-lucide="pencil" class="w-3.5 h-3.5"></i></button>
            <button class="w-7 h-7 flex items-center justify-center hover:text-danger hover:bg-danger/10 rounded-md"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
          </div>
        </td>`;
      tbody.appendChild(tr);
    });
    lucide.createIcons();
  