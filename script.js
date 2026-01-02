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

// 每日行程資料
const dayData = {
    1: {
        activities: [
            { time: '19:20', title: '✈️ 抵達 DFW 機場', desc: '租車取車', price: '' },
            { time: '20:00', title: '🚗 前往住宿', desc: '開車 30-35 分鐘 (30 km) 至 1555 Elm St<br>市中心高層景觀,附免費車庫', price: '' },
            { time: '21:00', title: '🛒 Tom Thumb 超市', desc: '📍 2380 N Field St(車程 5-7 分鐘 / 2 km)<br>🕐 營業時間 06:00-23:00<br>採買早餐、飲料、水果、簡餐', price: 'NT$300-500' }
        ],
        budget: 'NTD 500'
    },
    2: {
        activities: [
            { time: '12:00', title: '🍽️ City Hall Bistro', desc: '📍 1321 Commerce St(步行 5 分鐘)<br>南歐風味,推薦羊肉串與小盤 Tapas', price: '$20-28 ≈ NTD 650-900' },
            { time: '13:30-17:00', title: '🦕 Perot 科學博物館', desc: '📍 2201 N Field St(車程 6 分鐘)<br>亮點:恐龍化石、太空艙、寶石廳', price: '門票 $25 ≈ NTD 800<br>停車 $10-15 ≈ NTD 320-480' },
            { time: '18:00', title: '🍸 The Woolworth', desc: '📍 1520 Elm St #201(步行 5 分鐘)<br>精緻調酒、美式料理', price: '$22-32 ≈ NTD 700-1,000' }
        ],
        budget: 'NTD 2,200'
    },
    3: {
        activities: [
            { time: '12:00', title: '🍕 Partenope Ristorante', desc: '📍 1903 Main St(步行 6 分鐘)<br>拿坡里披薩與義大利麵', price: '$18-28 ≈ NTD 580-900' },
            { time: '13:30-16:30', title: '🐧 Dallas World Aquarium', desc: '📍 1801 N Griffin St(車程 6 分鐘)<br>特色:熱帶雨林動線、鯊魚隧道、企鵝與珍稀鳥類', price: '門票 $30 ≈ NTD 960<br>停車 $10-15 ≈ NTD 320-480' },
            { time: '18:30', title: '🍢 Tei Tei Robata Bar', desc: '📍 2906 N Henderson Ave(車程 10-15 分鐘)<br>日式炭火串燒', price: '$28-40 ≈ NTD 900-1,280' }
        ],
        budget: 'NTD 2,700'
    },
    4: {
        activities: [
            { time: '12:00', title: '🍕 外送午餐', desc: '披薩或墨西哥捲餅', price: 'NTD 350-600' },
            { time: '15:00-17:00', title: '🚀 航空博物館', desc: '📍 6911 Lemmon Ave(車程 15 分鐘)<br>展覽:NASA 太空艙、復古飛機、火箭實物<br>🅿️ 免費停車', price: '門票 $10 ≈ NTD 320' },
            { time: '19:00', title: '<img src="https://cdn-icons-png.flaticon.com/512/7462/7462399.png" alt="Basketball" class="basketball-icon"> NBA 賽事', desc: '<strong>Dallas Mavericks vs OKC Thunder</strong><br>📍 American Airlines Center(車程 10 分鐘)<br>💡 建議 17:30-18:00 先到附近用簡餐', price: '門票 $120 ≈ NTD 3,840<br>停車 $25-40 ≈ NTD 800-1,280', isNBA: true }
        ],
        budget: 'NTD 5,200'
    },
    5: {
        activities: [
            { time: '11:00', title: '🏨 Dallas 退房', desc: '', price: '' },
            { time: '11:00-12:30', title: '🚗 開車至 Waco', desc: '155 km,約 1.5 小時', price: '' },
            { time: '12:30', title: '🌻 Magnolia Market', desc: '📍 601 Webster Ave, Waco<br>園區免費參觀,享用午餐', price: '餐飲 $12-20 ≈ NTD 380-650' },
            { time: '15:00-16:30', title: '🚗 開車至 Austin', desc: '160 km,約 1.5 小時', price: '' },
            { time: '17:00', title: '🏨 Austin 入住', desc: '📍 1209 E M. Franklin Ave<br>免費停車', price: '晚餐外送 NTD 400-700' }
        ],
        budget: 'NTD 1,500'
    },
    6: {
        activities: [
            { time: '11:00', title: '🏨 Austin 退房', desc: '', price: '' },
            { time: '12:00', title: '🛍️ San Marcos Outlets', desc: '🚗 車程 45 分鐘<br>名牌林立,全年折扣<br>美食廣場餐飲', price: 'NTD 350-600' },
            { time: '14:30', title: '🚗 開車至 San Antonio', desc: '80 km,約 1 小時', price: '' },
            { time: '16:00', title: '☕ The Pearl District', desc: '📍 303 Pearl Pkwy<br>免費逛特色店、咖啡吧、精釀啤酒', price: '' },
            { time: '晚上', title: '🏨 San Antonio 入住', desc: '📍 113 San Arturo St<br>Southtown 歷史區,建築內免費停車', price: '晚餐外送 NTD 400-700' }
        ],
        budget: 'NTD 1,500'
    },
    7: {
        activities: [
            { time: '12:00', title: '🌴 Rainforest Cafe', desc: '📍 110 E Crockett St(車程 8-12 分鐘)', price: '$18-28 ≈ NTD 580-900<br>停車 $10-15 ≈ NTD 320-480' },
            { time: '13:30-17:00', title: '🚤 River Walk 散步', desc: '🎨 La Villita Arts Village 手作工坊<br>🍺 Esquire Tavern 經典酒吧<br>🚤 可搭 GO RIO River Cruise', price: '遊船 $15 ≈ NTD 480' },
            { time: '18:00', title: '🍽️ Pharm Table', desc: '📍 611 S Presa St Suite 106(步行 8 分鐘)', price: '$22-35 ≈ NTD 700-1,120' }
        ],
        budget: 'NTD 2,000'
    },
    8: {
        activities: [
            { time: '10:00', title: '🏨 SA 提早退房', desc: '', price: '' },
            { time: '11:30-13:00', title: '🎮 Pinballz 彈珠台', desc: '📍 8940 Research Blvd, Austin<br>免費入場,代幣制遊戲', price: '代幣 $10-15 ≈ NTD 320-480' },
            { time: '14:00-17:30', title: '🛍️ Grapevine Mills', desc: '🚗 車程 3 小時<br>購物 & 早晚餐,停車免費', price: 'NTD 500-800' },
            { time: '19:30', title: '🚗 出發前往 DFW', desc: '25 分鐘車程', price: '' },
            { time: '22:50', title: '✈️ 返台', desc: '<strong>長榮 BR53 起飛</strong><br>3/7 抵達台北', price: '', isReturn: true }
        ],
        budget: 'NTD 1,800'
    }
};

// 顯示特定天的詳細行程
function toggleDay(day) {
    const data = dayData[day];
    const card = event.currentTarget;
    const content = document.getElementById(`day-content-${day}`);
    const isExpanded = card.classList.contains('expanded');
    
    // 關閉所有其他卡片
    document.querySelectorAll('.day-card').forEach(c => {
        if (c !== card) {
            c.classList.remove('expanded');
        }
    });
    
    // 切換當前卡片
    if (isExpanded) {
        card.classList.remove('expanded');
        content.innerHTML = '';
    } else {
        card.classList.add('expanded');
        
        let html = `
            <div class="day-card-inner">
                <div class="timeline-container">
        `;
        
        data.activities.forEach((activity, index) => {
            const isLast = index === data.activities.length - 1;
            const specialClass = activity.isNBA ? 'nba-timeline-item' : (activity.isReturn ? 'return-timeline-item' : '');
            
            html += `
                <div class="timeline-item ${specialClass}">
                    <div class="timeline-time">
                        <div class="time-circle"></div>
                        <div class="time-text">${activity.time}</div>
                    </div>
                    <div class="timeline-line ${isLast ? 'timeline-line-last' : ''}"></div>
                    <div class="timeline-content">
                        <div class="timeline-title">${activity.title}</div>
                        ${activity.desc ? `<div class="timeline-desc">${activity.desc}</div>` : ''}
                        ${activity.price ? `<div class="timeline-price">${activity.price}</div>` : ''}
                    </div>
                </div>
            `;
        });
        
        html += `
                </div>
                <div class="day-budget-footer">
                    <span>當日花費</span>
                    <span class="budget-amount-large">${data.budget}</span>
                </div>
            </div>
        `;
        
        content.innerHTML = html;
    }
}
