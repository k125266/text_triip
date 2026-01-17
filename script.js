// 滾動觸發動畫
document.addEventListener('DOMContentLoaded', function() {
    // 設定 Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // 觀察所有需要動畫的元素
    const revealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale');
    revealElements.forEach(element => {
        observer.observe(element);
    });

    // 鍵盤控制翻頁
    document.addEventListener('keydown', function(e) {
        const bookViewer = document.getElementById('book-viewer');
        if (bookViewer && bookViewer.classList.contains('active')) {
            if (e.key === 'ArrowLeft') {
                navigateDay('prev');
            } else if (e.key === 'ArrowRight') {
                navigateDay('next');
            } else if (e.key === 'Escape') {
                closeBookViewer();
            }
        }
    });
});

// Tab 切換功能
function showTab(tabName) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// 分類標籤配置（使用 Flaticon 圖片）
const categoryConfig = {
    transport: {
        label: '交通',
        icon: 'https://cdn-icons-png.flaticon.com/512/9709/9709678.png',
        class: 'tag-transport'
    },
    dining: {
        label: '用餐',
        icon: 'https://cdn-icons-png.flaticon.com/512/3703/3703377.png',
        class: 'tag-dining'
    },
    attraction: {
        label: '景點',
        icon: 'https://cdn-icons-png.flaticon.com/512/8087/8087892.png',
        class: 'tag-attraction'
    },
    shopping: {
        label: '購物',
        icon: 'https://cdn-icons-png.flaticon.com/512/8730/8730692.png',
        class: 'tag-shopping'
    },
    accommodation: {
        label: '住宿',
        icon: 'https://cdn-icons-png.flaticon.com/512/8526/8526337.png',
        class: 'tag-accommodation'
    },
    rest: {
        label: '休息',
        icon: 'https://cdn-icons-png.flaticon.com/512/7716/7716942.png',
        class: 'tag-rest'
    },
    nba: {
        label: 'NBA',
        icon: 'https://cdn-icons-png.flaticon.com/512/7462/7462399.png',
        class: 'tag-nba'
    },
    arrival: {
        label: '抵達',
        icon: 'https://cdn-icons-png.flaticon.com/512/12142/12142421.png',
        class: 'tag-arrival'
    },
    checkin: {
        label: '登機',
        icon: 'https://cdn-icons-png.flaticon.com/512/12142/12142421.png',
        class: 'tag-checkin'
    },
    return: {
        label: '返程',
        icon: 'https://cdn-icons-png.flaticon.com/512/12142/12142421.png',
        class: 'tag-return'
    }
};

// 每日行程資料（完整詳細版）
const dayData = {
    1: {
        title: 'Day 1｜抵達達拉斯',
        date: '2026/2/26 週四',
        activities: [
            { time: '19:15-19:30', title: '航班抵達', desc: 'EVA BR52 抵達 DFW 機場', category: 'arrival' },
            { time: '19:30-20:00', title: '租車取車', desc: '前往 Turo 指定地點領取 Tesla<br>檢查 FSD 狀態', category: 'transport' },
            { time: '20:00-20:45', title: '城市接駁', desc: 'DFW 機場 ➜ 達拉斯市中心住宿<br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1555 Elm St', category: 'transport' },
            { time: '20:45-21:00', title: '入住 Check-in', desc: '高層景觀公寓入住、行李安置', category: 'accommodation' },
            { time: '21:00-21:45', title: '超市採買', desc: '<strong>Tom Thumb</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 2380 N Field St<br>購置生活備品、早餐、飲料', category: 'shopping', price: 'NT$300-500' },
            { time: '21:45-22:15', title: '整理與休息', desc: '準備隔日行程', category: 'rest' }
        ],
        budget: 'NTD 500'
    },
    2: {
        title: 'Day 2｜科學探索與法式優雅',
        date: '2/27 週五',
        activities: [
            { time: '08:00-11:45', title: '晨間休息', desc: '公寓享受市中心景觀、居家早餐', category: 'rest' },
            { time: '11:45-12:00', title: '步行移動', desc: '前往 City Hall Bistro', category: 'transport' },
            { time: '12:00-13:30', title: '午餐', desc: '<strong>City Hall Bistro</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1321 Commerce St (步行 5 分鐘)<br>南歐風味、羊肉串', category: 'dining', price: '$20-28 ≈ NTD 650-900' },
            { time: '13:30-13:45', title: '車程', desc: '前往 Perot Museum', category: 'transport' },
            { time: '13:45-17:00', title: '景點', desc: '<strong>Perot Museum</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 2201 N Field St (車程 6 分鐘)<br>自然科學博物館、恐龍化石', category: 'attraction', price: '門票 $25 ≈ NTD 800<br>停車 $10-15 ≈ NTD 480' },
            { time: '17:00-18:00', title: '回程休息', desc: '市中心散步或公寓短暫休息', category: 'rest' },
            { time: '18:00-20:00', title: '晚餐', desc: '<strong>The Woolworth</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1520 Elm St #201 (步行 5 分鐘)<br>露台調酒、精緻美式料理', category: 'dining', price: '$22-32 ≈ NTD 1,000' }
        ],
        budget: 'NTD 2,900'
    },
    3: {
        title: 'Day 3｜雨林冒險與日式炭火',
        date: '2/28 週六',
        activities: [
            { time: '09:00-11:45', title: '晨間自由活動', desc: '市中心探索或休息', category: 'rest' },
            { time: '11:45-12:00', title: '步行移動', desc: '前往餐廳', category: 'transport' },
            { time: '12:00-13:30', title: '午餐', desc: '<strong>Partenope Ristorante</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1903 Main St (步行 6 分鐘)<br>正宗拿坡里披薩', category: 'dining', price: '$18-28 ≈ NTD 900' },
            { time: '13:30-13:45', title: '車程', desc: '前往水族館', category: 'transport' },
            { time: '13:45-16:30', title: '景點', desc: '<strong>Dallas World Aquarium</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1801 N Griffin St (車程 6 分鐘)<br>雨林動線、鯊魚隧道', category: 'attraction', price: '門票 $30 ≈ NTD 960<br>停車 $15 ≈ NTD 480' },
            { time: '16:30-18:15', title: '車程/緩衝', desc: '前往 Henderson Ave 區域', category: 'transport' },
            { time: '18:15-20:15', title: '晚餐', desc: '<strong>Tei Tei Robata Bar</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 2906 N Henderson Ave (車程 12 分鐘)<br>日式炭火串燒、清酒', category: 'dining', price: '$28-40 ≈ NTD 1,280' }
        ],
        budget: 'NTD 3,620'
    },
    4: {
        title: 'Day 4｜飛行夢想與 NBA 熱血戰',
        date: '3/1 週日',
        activities: [
            { time: '10:00-12:00', title: '慢活早晨', desc: '享受公寓設施', category: 'rest' },
            { time: '12:00-13:30', title: '午餐', desc: '外送 (Tex-Mex 或披薩)<br>在公寓內輕鬆用餐', category: 'dining', price: 'NTD 600' },
            { time: '13:30-14:45', title: '休息時間', desc: '為晚間 NBA 比賽儲備體力', category: 'rest' },
            { time: '14:45-15:00', title: '車程', desc: '前往飛行博物館', category: 'transport' },
            { time: '15:00-17:00', title: '景點', desc: '<strong>Frontiers of Flight Museum</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 6911 Lemmon Ave (車程 15 分鐘)<br>NASA 太空艙', category: 'attraction', price: '門票 $10 ≈ NTD 320' },
            { time: '17:00-17:30', title: '車程', desc: '前往 AAC 球館附近', category: 'transport' },
            { time: '17:30-18:45', title: '簡餐', desc: '球場附近快速進餐<br>(如 Shake Shack 或簡餐店)', category: 'dining', price: 'NTD 500' },
            { time: '19:00-21:30', title: 'NBA Game', desc: '<strong style="color: #FFA500;">獨行俠 vs 雷霆</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7462/7462399.png" alt="Basketball" class="basketball-icon"> American Airlines Center', category: 'nba', price: '門票 $120 ≈ NTD 3,840<br>停車 $30 ≈ NTD 960', isNBA: true }
        ],
        budget: 'NTD 6,220'
    },
    5: {
        title: 'Day 5｜美式美學 Waco 轉點之旅',
        date: '3/2 週一',
        activities: [
            { time: '09:30-11:00', title: '退房與裝車', desc: '離開達拉斯公寓', category: 'accommodation' },
            { time: '11:00-12:30', title: '南下車程', desc: 'I-35 前往 Waco<br>Tesla FSD 體驗', category: 'transport' },
            { time: '12:30-15:00', title: '午餐與導覽', desc: '<strong>Magnolia Market</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 601 Webster Ave, Waco<br>美式鄉村風、美食車', category: 'attraction', price: 'NTD 650' },
            { time: '15:00-16:30', title: '車程', desc: 'Waco ➜ 奧斯汀 (Austin)', category: 'transport' },
            { time: '16:30-17:30', title: '入住 Check-in', desc: 'Austin 住宅區民宿辦理入住<br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 1209 E M. Franklin Ave', category: 'accommodation' },
            { time: '17:30-19:30', title: '晚餐', desc: '外送 (Austin 特色烤肉或健康餐盒)', category: 'dining', price: 'NTD 700' },
            { time: '19:30-22:00', title: '休息', desc: 'Austin 住宅區靜謐夜晚', category: 'rest' }
        ],
        budget: 'NTD 1,350'
    },
    6: {
        title: 'Day 6｜血拼與聖安東尼奧歷史',
        date: '3/3 週二',
        activities: [
            { time: '09:30-11:00', title: '整理行李', desc: '退房並準備出發', category: 'accommodation' },
            { time: '11:00-11:45', title: '車程', desc: '前往 San Marcos Outlets', category: 'transport' },
            { time: '11:45-14:30', title: '購物與午餐', desc: '<strong>San Marcos Premium Outlets</strong><br>快速午餐', category: 'shopping', price: 'NTD 600' },
            { time: '14:30-15:30', title: '車程', desc: 'San Marcos ➜ 聖安東尼奧', category: 'transport' },
            { time: '15:30-16:00', title: '入住 Check-in', desc: 'Southtown 歷史區住宿<br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 113 San Arturo St', category: 'accommodation' },
            { time: '16:00-18:00', title: '景點', desc: '<strong>The Pearl District</strong><br>歷史酒廠改建文化區', category: 'attraction' },
            { time: '18:00-19:30', title: '晚餐', desc: 'Pearl 區特色餐廳或外送', category: 'dining', price: 'NTD 700' }
        ],
        budget: 'NTD 1,300'
    },
    7: {
        title: 'Day 7｜運河之城的浪漫日常',
        date: '3/4 週三',
        activities: [
            { time: '10:00-11:45', title: '慢活早晨', desc: '漫步 Southtown 歷史街區', category: 'rest' },
            { time: '11:45-12:00', title: '車程', desc: '前往河濱步行區', category: 'transport' },
            { time: '12:00-13:30', title: '午餐', desc: '<strong>Rainforest Cafe</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 110 E Crockett St<br>雨林主題體驗', category: 'dining', price: '$18-28 ≈ NTD 900<br>停車 $12 ≈ NTD 400' },
            { time: '13:30-16:30', title: '景點', desc: '<strong>River Walk 漫步</strong><br>GO RIO 運河遊船', category: 'attraction', price: '遊船 $15 ≈ NTD 480' },
            { time: '16:30-17:30', title: '景點', desc: '<strong>La Villita Arts Village</strong><br>藝術村手工藝', category: 'attraction' },
            { time: '17:30-18:00', title: '步行/接駁', desc: '前往晚餐地點', category: 'transport' },
            { time: '18:00-19:45', title: '晚餐', desc: '<strong>Pharm Table</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 611 S Presa St Suite 106<br>健康創意料理', category: 'dining', price: '$22-35 ≈ NTD 1,120' }
        ],
        budget: 'NTD 2,900'
    },
    8: {
        title: 'Day 8｜懷舊電玩與賦歸',
        date: '3/5 週四',
        activities: [
            { time: '08:30-10:00', title: '最後巡禮', desc: '早起退房、出發北上', category: 'accommodation' },
            { time: '10:00-11:30', title: '北上車程', desc: '聖安東尼奧 ➜ 奧斯汀', category: 'transport' },
            { time: '11:30-13:00', title: '景點', desc: '<strong>Pinballz Lake Creek</strong><br><img src="https://cdn-icons-png.flaticon.com/512/7763/7763870.png" alt="Location" class="basketball-icon tiny"> 8940 Research Blvd, Austin<br>復古彈珠台/午餐', category: 'attraction', price: '代幣 $15 ≈ NTD 480' },
            { time: '13:00-16:30', title: '長途車程', desc: '奧斯汀 ➜ 達拉斯 Grapevine 區域', category: 'transport' },
            { time: '16:30-18:45', title: '最後購物', desc: '<strong>Grapevine Mills</strong><br>免稅採買、早晚餐', category: 'shopping', price: 'NTD 800' },
            { time: '18:45-19:30', title: '機場移動', desc: '前往 DFW 車站還車<br>Turo 還車手續', category: 'transport' },
            { time: '19:30-20:30', title: '登機手續', desc: 'EVA Air 櫃檯託運、出境安檢', category: 'checkin' },
            { time: '22:50', title: '起飛', desc: '<strong>返家航班 BR53</strong><br>3/7 抵達台北', category: 'return', isReturn: true }
        ],
        budget: 'NTD 1,280'
    }
};

let currentDay = 1;

// 開啟翻書模式
function toggleDay(day) {
    currentDay = day;
    openBookViewer(day);
}

function openBookViewer(day) {
    let bookViewer = document.getElementById('book-viewer');

    // 如果不存在，創建翻書容器
    if (!bookViewer) {
        bookViewer = document.createElement('div');
        bookViewer.id = 'book-viewer';
        bookViewer.className = 'book-viewer';
        bookViewer.innerHTML = `
            <div class="book-container">
                <button class="book-close" onclick="closeBookViewer()">×</button>
                <button class="book-nav book-nav-prev" onclick="navigateDay('prev')">
                    <span>◀</span>
                </button>
                <div class="book-page" id="book-page"></div>
                <button class="book-nav book-nav-next" onclick="navigateDay('next')">
                    <span>▶</span>
                </button>
                <div class="book-indicator" id="book-indicator"></div>
            </div>
        `;
        document.body.appendChild(bookViewer);
    }

    renderPage(day);
    bookViewer.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookViewer() {
    const bookViewer = document.getElementById('book-viewer');
    if (bookViewer) {
        bookViewer.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function navigateDay(direction) {
    if (direction === 'prev' && currentDay > 1) {
        currentDay--;
    } else if (direction === 'next' && currentDay < 8) {
        currentDay++;
    } else {
        return;
    }

    const bookPage = document.getElementById('book-page');
    bookPage.classList.add('page-flip');

    setTimeout(() => {
        renderPage(currentDay);
        bookPage.classList.remove('page-flip');
    }, 300);
}

function renderPage(day) {
    const data = dayData[day];
    const bookPage = document.getElementById('book-page');
    const indicator = document.getElementById('book-indicator');

    let html = `
        <div class="page-header">
            <div class="page-title">${data.title}</div>
            <div class="page-date">${data.date}</div>
        </div>
        <div class="page-content">
            <div class="timeline-container">
    `;

    data.activities.forEach((activity, index) => {
        const isLast = index === data.activities.length - 1;
        const specialClass = activity.isNBA ? 'nba-timeline-item' : (activity.isReturn ? 'return-timeline-item' : '');

        // 獲取分類配置
        const categoryInfo = categoryConfig[activity.category] || { label: '', icon: '', class: '' };

        html += `
            <div class="timeline-item ${specialClass}">
                <div class="timeline-time">
                    <div class="time-circle ${categoryInfo.class}">
                        <img src="${categoryInfo.icon}" class="category-icon" alt="${categoryInfo.label}">
                    </div>
                    <div class="time-text">${activity.time}</div>
                </div>
                <div class="timeline-line ${isLast ? 'timeline-line-last' : ''}"></div>
                <div class="timeline-content">
                    <div class="timeline-header">
                        <span class="category-tag ${categoryInfo.class}">${categoryInfo.label}</span>
                        <span class="timeline-title">${activity.title}</span>
                        ${activity.price ? `<span class="price-badge">${activity.price.split('<br>')[0]}</span>` : ''}
                    </div>
                    ${activity.desc ? `<div class="timeline-desc">${activity.desc}</div>` : ''}
                    ${activity.price && activity.price.includes('<br>') ? `<div class="timeline-price-detail">${activity.price.split('<br>').slice(1).join('<br>')}</div>` : ''}
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
        <div class="page-footer">
            <div class="day-budget-footer">
                <span>當日花費</span>
                <span class="budget-amount-large">${data.budget}</span>
            </div>
        </div>
    `;

    bookPage.innerHTML = html;
    indicator.textContent = `Day ${day} / 8`;

    // 更新導航按鈕狀態
    const prevBtn = document.querySelector('.book-nav-prev');
    const nextBtn = document.querySelector('.book-nav-next');
    prevBtn.style.opacity = day === 1 ? '0.3' : '1';
    prevBtn.style.pointerEvents = day === 1 ? 'none' : 'auto';
    nextBtn.style.opacity = day === 8 ? '0.3' : '1';
    nextBtn.style.pointerEvents = day === 8 ? 'none' : 'auto';
}

// ========== 待辦清單功能 ==========

// 從 localStorage 讀取勾選狀態
function loadChecklistState() {
    const savedState = localStorage.getItem('texasTripChecklist');
    if (savedState) {
        const checkedItems = JSON.parse(savedState);
        checkedItems.forEach(taskId => {
            const checkbox = document.getElementById(taskId);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }
}

// 儲存勾選狀態到 localStorage
function saveChecklistState() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const checkedItems = [];

    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            checkedItems.push(checkbox.id);
        }
    });

    localStorage.setItem('texasTripChecklist', JSON.stringify(checkedItems));
}

// 初始化待辦清單功能
function initChecklist() {
    // 載入已儲存的狀態
    loadChecklistState();

    // 為所有 checkbox 添加事件監聽器
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveChecklistState);
    });
}

// 當 DOM 載入完成後初始化
document.addEventListener('DOMContentLoaded', initChecklist);
