// Tab 切換功能
function showTab(tabName) {
    // 隱藏所有 tab content
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));
    
    // 移除所有 tab 按鈕的 active 狀態
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // 顯示選中的 tab
    document.getElementById(tabName).classList.add('active');
    event.target.classList.add('active');
}

// 每日行程資料
const dayData = {
    1: {
        title: '第一天 | 週四 2/26 — 抵達達拉斯',
        activities: [
            { time: '19:20', desc: '抵達 DFW → 租車取車' },
            { time: '20:00', desc: '開車30-35分鐘至住宿 1555 Elm St（免費車庫）' },
            { time: '21:00', desc: '<strong>Tom Thumb 超市採買</strong><br>📍 2380 N Field St（車程5-7分鐘）<br>🕐 營業至23:00 | 採買早餐、飲料、水果、簡餐' }
        ],
        budget: 'NTD 500'
    },
    2: {
        title: '第二天 | 週五 2/27 — Dallas 科學與美食',
        activities: [
            { time: '12:00', desc: '<strong>City Hall Bistro</strong> 午餐<br>📍 1321 Commerce St（步行5分鐘）<br>南歐風味，推薦羊肉串與小盤Tapas<br>💰 $20-28 ≈ NTD 650-900' },
            { time: '13:30-17:00', desc: '<strong>Perot Museum of Nature & Science</strong><br>📍 2201 N Field St（車程6分鐘）<br>🦕 亮點：恐龍化石、太空艙、寶石廳<br>💰 門票$25≈NTD 800 | 停車$10-15' },
            { time: '18:00', desc: '<strong>The Woolworth</strong> 晚餐<br>📍 1520 Elm St #201（步行5分鐘）<br>精緻調酒、美式料理<br>💰 $22-32 ≈ NTD 700-1,000' }
        ],
        budget: 'NTD 2,200'
    },
    3: {
        title: '第三天 | 週六 2/28 — Dallas World Aquarium',
        activities: [
            { time: '12:00', desc: '<strong>Partenope Ristorante</strong> 午餐<br>📍 1903 Main St（步行6分鐘）<br>拿坡里披薩與義大利麵<br>💰 $18-28 ≈ NTD 580-900' },
            { time: '13:30-16:30', desc: '<strong>Dallas World Aquarium</strong><br>📍 1801 N Griffin St（車程6分鐘）<br>🐧 特色：熱帶雨林動線、鯊魚隧道、企鵝與珍稀鳥類<br>💰 門票$30≈NTD 960 | 停車$10-15' },
            { time: '18:30', desc: '<strong>Tei Tei Robata Bar</strong> 晚餐<br>📍 2906 N Henderson Ave（車程10-15分鐘）<br>日式炭火串燒<br>💰 $28-40 ≈ NTD 900-1,280' }
        ],
        budget: 'NTD 2,700'
    },
    4: {
        title: '🏀 第四天 | 週日 3/1 — 航空博物館 + NBA 賽事！',
        activities: [
            { time: '12:00', desc: '外送到住宿（披薩或墨西哥捲餅）<br>💰 NTD 350-600' },
            { time: '15:00-17:00', desc: '<strong>Frontiers of Flight Museum</strong><br>📍 6911 Lemmon Ave（車程15分鐘）<br>🚀 展覽：NASA太空艙、復古飛機、火箭實物<br>💰 門票$10≈NTD 320 | 免費停車' },
            { time: '19:00', desc: '<strong style="font-size:1.2em">🏀 NBA 賽事</strong><br><strong>Dallas Mavericks vs OKC Thunder</strong><br>📍 American Airlines Center（車程10分鐘）<br>💡 建議17:30-18:00先到附近用簡餐再入場<br>💰 門票$120≈NTD 3,840 | 停車$25-40', highlight: true }
        ],
        budget: 'NTD 5,200'
    },
    5: {
        title: '第五天 | 週一 3/2 — Waco ➜ Austin',
        activities: [
            { time: '11:00', desc: 'Dallas 退房' },
            { time: '11:00-12:30', desc: '開車至 Waco（155公里，約1.5小時）' },
            { time: '12:30', desc: '<strong>Magnolia Market at the Silos</strong> 午餐<br>📍 601 Webster Ave, Waco<br>園區免費參觀，享用午餐並休息<br>💰 餐飲$12-20≈NTD 380-650' },
            { time: '15:00-16:30', desc: '開車至 Austin（160公里，約1.5小時）' },
            { time: '17:00', desc: '入住 Austin 住宿<br>📍 1209 E M. Franklin Ave（免費停車）<br>晚餐外送 💰 NTD 400-700' }
        ],
        budget: 'NTD 1,500'
    },
    6: {
        title: '第六天 | 週二 3/3 — San Marcos ➜ San Antonio',
        activities: [
            { time: '11:00', desc: 'Austin 退房' },
            { time: '12:00', desc: '<strong>San Marcos Premium Outlets</strong><br>車程45分鐘<br>🛍️ 名牌林立，全年折扣<br>💰 美食廣場餐飲 NTD 350-600' },
            { time: '14:30', desc: '開車至 San Antonio（80公里，約1小時）' },
            { time: '16:00', desc: '<strong>The Pearl District</strong><br>📍 303 Pearl Pkwy<br>免費逛特色店、咖啡吧、精釀啤酒<br>晚餐外送 💰 NTD 400-700' },
            { time: '晚上', desc: '入住 San Antonio<br>📍 113 San Arturo St（免費停車）' }
        ],
        budget: 'NTD 1,500'
    },
    7: {
        title: '第七天 | 週三 3/4 — San Antonio River Walk',
        activities: [
            { time: '12:00', desc: '<strong>Rainforest Cafe</strong> 午餐<br>📍 110 E Crockett St（車程8-12分鐘）<br>💰 $18-28≈NTD 580-900 | 停車$10-15' },
            { time: '13:30-17:00', desc: '<strong>San Antonio River Walk</strong><br>🎨 La Villita Arts Village 手作工坊<br>🍺 Esquire Tavern 經典酒吧<br>🚤 可選：GO RIO River Cruise<br>💰 遊船$15≈NTD 480' },
            { time: '18:00', desc: '<strong>Pharm Table</strong> 晚餐<br>📍 611 S Presa St Suite 106（步行8分鐘）<br>💰 $22-35≈NTD 700-1,120' }
        ],
        budget: 'NTD 2,000'
    },
    8: {
        title: '第八天 | 週四 3/5 — 返程日',
        activities: [
            { time: '10:00', desc: 'San Antonio 提早退房' },
            { time: '11:30-13:00', desc: '<strong>Pinballz Lake Creek</strong><br>📍 8940 Research Blvd, Austin<br>🎮 免費入場，代幣制遊戲<br>💰 代幣$10-15≈NTD 320-480' },
            { time: '14:00-17:30', desc: '<strong>Grapevine Mills Outlet</strong><br>車程3小時<br>🛍️ 購物&早晚餐，停車免費<br>💰 NTD 500-800' },
            { time: '19:30', desc: '前往 DFW 機場（25分鐘）' },
            { time: '22:50', desc: '<strong>✈️ 長榮 BR53 起飛返台</strong><br>3/7 抵達台北', highlight: true }
        ],
        budget: 'NTD 1,800'
    }
};

// 顯示特定天的詳細行程
function showDay(day) {
    const data = dayData[day];
    const container = document.getElementById('day-details');
    
    // 更新所有 day 按鈕狀態
    document.querySelectorAll('.day-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    let html = `
        <div class="day-detail-card ${day === 4 ? 'nba-card' : ''}">
            <h2>${data.title}</h2>
            <div class="activities">
    `;
    
    data.activities.forEach(activity => {
        html += `
            <div class="activity-item ${activity.highlight ? 'highlight-activity' : ''}">
                <div class="activity-time">${activity.time}</div>
                <div class="activity-desc">${activity.desc}</div>
            </div>
        `;
    });
    
    html += `
            </div>
            <div class="day-budget">當日預算：${data.budget}</div>
        </div>
    `;
    
    container.innerHTML = html;
}

// 頁面載入時顯示 Day 1
document.addEventListener('DOMContentLoaded', function() {
    // 預設顯示 Day 1
    const firstDayBtn = document.querySelector('.day-btn');
    if (firstDayBtn) {
        firstDayBtn.classList.add('active');
        showDay(1);
    }
});
