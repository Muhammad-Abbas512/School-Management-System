# Scholaris — School Management SaaS Prototype

A fully functional HTML/Tailwind CSS/JavaScript prototype for a modern school management dashboard with three role-based interfaces: **Admin**, **Teacher**, and **Student**.

## 📁 Files Structure

```
index.html                 → Landing page (start here!)
login.html                 → Role selection & login
admin-dashboard.html       → Admin dashboard
teacher-dashboard.html     → Teacher dashboard
student-dashboard.html     → Student dashboard
```

## 🚀 Quick Start

1. **Open `index.html`** in any modern browser (Chrome, Firefox, Safari, Edge)
2. Click **"Get Started"** button
3. Choose a role: **Admin**, **Teacher**, or **Student**
4. Enter any email/password (no real authentication needed)
5. Explore the dashboard!

## ✨ Features

### **All Pages**
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sidebar navigation (collapsible on desktop, drawer on mobile)
- ✅ Top navbar with search, notifications, dark mode, profile menu
- ✅ Working buttons and modals throughout
- ✅ Toast notifications for user feedback
- ✅ Smooth transitions and hover effects
- ✅ Real-time chart rendering (Chart.js)

### **Admin Dashboard**
- Welcome card with personalized greeting
- 4 stat cards (Students, Teachers, Revenue, Attendance)
- 3 interactive charts (Attendance, Fee Collection, Admissions)
- Quick action buttons (Add Student, Teacher, Class, Attendance)
- Recent Students table with action buttons
- Upcoming Events sidebar
- Activity Feed with timeline
- Full sidebar with all admin sections

**Working Buttons:**
- ✅ Sidebar navigation links (highlight on hover)
- ✅ Profile menu (click avatar)
- ✅ Dark mode toggle
- ✅ Mobile menu toggle
- ✅ Sidebar collapse (desktop)
- ✅ Notifications bell (shows count badge)

### **Teacher Dashboard**
- Welcome card tailored to teacher (class information)
- 4 stat cards (Students Taught, Avg Attendance, Classes Today, Messages)
- 2 interactive charts (Class Attendance, Class Performance)
- Quick action buttons:
  - **Mark Attendance** → Modal with checkbox list
  - **Post Grades** → File upload modal
  - **Message Parents** → Message composition modal
  - **My Classes** → Expandable class list modal
- Today's Classes section
- Upcoming events & tasks
- All modals are **fully functional** (can submit forms)

**Working Features:**
- ✅ Click "Mark Attendance" → Select students → Click "Save"
- ✅ Click "Post Grades" → Select exam → Upload file → Post
- ✅ Click "Message Parents" → Fill form → Send (shows toast)
- ✅ Sidebar navigation to Classes, Attendance, Grades, Messages, Notices, Exams

### **Student Dashboard**
- Welcome card with personalized name & daily tasks
- 4 stat cards (Attendance, Avg Score, Pending Assignments, Fees Due)
- 2 interactive charts (Academic Performance, Subject Scores)
- Today's Schedule with class details
- Important Dates sidebar
- Latest Notices (with "View All" link)
- Pending Assignments (with "View All" link)
- Modals for:
  - **Timetable** → Full weekly schedule in table format
  - **Results** → Exam results with scores
  - **Assignments** → All assignments with due dates & status
  - **Attendance** → Attendance record with percentage & status breakdown
  - **Fees** → Fee status & breakdown table
  - **Notices** → All school notices
  - **Messages** → Messages from teachers & admin

**Working Features:**
- ✅ Click stat cards → Opens related modal
- ✅ Click "View all" links → Opens full modal
- ✅ All modals populate with mock data
- ✅ Sidebar links open respective modals

## 🎨 Design System

All three dashboards follow the **production-level design spec** from your brief:

- **Colors**: Primary (#2563EB), Success (#22C55E), Danger (#EF4444), Warning (#F59E0B)
- **Typography**: Inter font, 4-level hierarchy (30px, 22px, 16px, 14px, 12px)
- **Spacing**: Multiples of 4px/8px (4, 8, 12, 16, 24, 32, 48, 64)
- **Border Radius**: Cards (16px), Buttons (12px), Inputs (10px), Avatars (50%)
- **Shadows**: Minimal, soft (0 1px 3px rgba(15,23,42,.08))
- **Components**: Buttons, Cards, Tables, Badges, Modals, Dropdowns, Charts

## 🛠️ Tech Stack Used

- **HTML5** — Semantic markup
- **Tailwind CSS** — CDN (no build required)
- **JavaScript (Vanilla)** — No frameworks
- **Lucide Icons** — CDN for 400+ icons
- **Chart.js** — Interactive charts (CDN)
- **Responsive** — Mobile-first design

## 📱 Responsive Behavior

| Breakpoint | Sidebar | Navbar | Grid |
|---|---|---|---|
| Mobile (<640px) | Drawer (hamburger menu) | Full width | 1 column |
| Tablet (640px-1024px) | Drawer | Full width | 2 columns |
| Desktop (>1024px) | Visible + Collapsible | Full width | 4 columns |

## 🧭 Navigation Map

```
index.html (Landing)
    ↓
login.html (Role Picker)
    ├→ admin-dashboard.html
    ├→ teacher-dashboard.html
    └→ student-dashboard.html
         (Each has logout button that returns to login.html)
```

## 🔗 All Working Links/Buttons

| Page | Element | Action |
|---|---|---|
| **Landing** | Get Started → | Opens login.html |
| **Login** | Role Cards | Click to select & show form |
| **Login** | Continue Button | Routes to dashboard |
| **Any Dashboard** | Sidebar Links | Most open modals (prototype feature) |
| **Any Dashboard** | Profile Avatar | Opens dropdown menu |
| **Any Dashboard** | Notifications Bell | Shows badge count |
| **Any Dashboard** | Dark Mode Toggle | Toggles dark mode (visual only) |
| **Any Dashboard** | Hamburger Menu | Opens mobile sidebar drawer |
| **Any Dashboard** | Collapse Button | Collapses sidebar (desktop) |
| **Any Dashboard** | Logout | Returns to login.html |
| **Admin** | Quick Action Buttons | Demo tooltips (visual feedback) |
| **Teacher** | Mark Attendance | Opens modal with students |
| **Teacher** | Post Grades | Opens file upload form |
| **Teacher** | Message Parents | Opens message composer |
| **Teacher** | My Classes | Opens class list modal |
| **Student** | Stat Cards | Click to open related modal |
| **Student** | View All Links | Opens full modal view |
| **Modals** | Cancel/Close | Closes modal |
| **Modals** | Submit Buttons | Shows success toast |

## 🎯 Key Prototype Features

✅ **Fully Responsive** — Works on all screen sizes  
✅ **Interactive Modals** — Click buttons to open/close  
✅ **Toast Notifications** — Success messages  
✅ **Chart Rendering** — Real data visualization  
✅ **Mock Data** — Realistic student/teacher/class data  
✅ **Sidebar Navigation** — Full menu with sections  
✅ **Profile Menus** — Dropdown with options  
✅ **Dark Mode Toggle** — Visual theme switch  
✅ **Mobile Drawer** — Hamburger menu on small screens  
✅ **Form Inputs** — All inputs are functional  

## 🚫 What's NOT Included (Prototype Only)

❌ Real authentication  
❌ Backend/API calls  
❌ Database  
❌ Real file uploads  
❌ Email sending  
❌ Data persistence (refresh loses modal state)  
❌ Teacher/Student portals expanded (only Admin fully built)  

## 🎓 Learning Points

This prototype demonstrates:
- Production-level component architecture (reusable buttons, cards, modals)
- Responsive design patterns (sidebar, navbar, grid layouts)
- Accessibility considerations (semantic HTML, focus states)
- JavaScript state management (modals, dropdowns, toggles)
- Chart.js integration
- Tailwind CSS utility-first approach
- Clean, maintainable code structure

## 📝 Customization Tips

**Change colors:**
```js
// In <script> section, update Tailwind config colors
colors: {
  primary: '#YOUR_COLOR',
  success: '#YOUR_COLOR',
  // ...
}
```

**Add new modal:**
1. Copy existing modal HTML
2. Add new `id` and content
3. Update button to call `showModal('new-id')`

**Add sidebar link:**
1. Add `<a>` tag in nav section
2. Link to modal: `onclick="showModal('modal-id'); return false;"`

## 🎬 Demo Flow (Suggested)

1. Start at landing page (index.html)
2. Read feature highlights
3. Click "Get Started"
4. Select "Admin" role
5. Explore admin dashboard:
   - Scroll through sections
   - Click quick action buttons
   - Open profile menu
   - Toggle dark mode
   - Try mobile view (resize browser)
6. Logout and try "Teacher" role
7. Try "Student" role
8. Compare the three interfaces!

## 💡 Notes

- All data is mock/hardcoded (no database)
- Sidebar active link styling shows current page
- Mobile menu closes when clicking links
- Charts update on page load with realistic data
- Toast notifications auto-dismiss after 3.2 seconds
- Modals can be closed by clicking outside (overlay)

## 🤝 Credits

- **Design System**: Based on production SaaS dashboard principles
- **Color Palette**: Carefully selected for accessibility & distinction
- **Icons**: Lucide Icons (open-source)
- **Charts**: Chart.js library
- **Styling**: Tailwind CSS v3+

---

**Enjoy exploring the Scholaris prototype!** 🎓✨

Open any HTML file in a browser and start clicking around. Everything is wired and ready to go.
