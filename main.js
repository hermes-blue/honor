let selectedSage = null;

const sages = {
    confucius: {
        name: "공자",
        title: "성인 공자",
        color: "stone-900",
        responses: [
            "벗이 멀리서 찾아오니 또한 즐겁지 아니한가(학이시습지 불역열호). 당신의 고민 또한 배움의 과정이며, 이를 통해 당신은 더 나은 군자로 거듭날 것입니다. 논어에서 이르길, 아는 것을 안다 하고 모르는 것을 모른다 하는 것이 진정 아는 것이라 했습니다. 당신의 상황을 정직하게 대면하는 용기를 가지십시오.",
            "교묘한 말과 아첨하는 얼굴을 하는 사람 중에는 어진 이가 드물다고 하였습니다(교언영색 선의인). 타인의 시선에 휘둘리기보다 자신의 내면을 닦는 데 집중하십시오. 인(仁)은 멀리 있는 것이 아닙니다. 내가 하고자 하는 것을 남에게 먼저 베푸는 서(恕)의 마음을 실천한다면 막힌 길도 열릴 것입니다.",
            "멈추지 않는다면 얼마나 천천히 가는지는 중요하지 않습니다. 학문과 인생의 길은 하루아침에 이루어지는 것이 아니니, 조급함을 버리고 예(禮)를 갖추어 매일 조금씩 정진하십시오. 스스로를 귀하게 여기고 끊임없이 성찰할 때 비로소 평안에 이를 수 있습니다."
        ]
    },
    buddha: {
        name: "부처",
        title: "석가모니 부처",
        color: "amber-600",
        responses: [
            "모든 것은 마음에서 비롯됩니다. 당신이 겪는 고통의 실체는 외부가 아닌 그것을 바라보는 당신의 집착에 있을지도 모릅니다. 법구경에 이르길, 마음은 모든 현상의 근본이며 마음이 주인이 되어 모든 일을 만든다고 했습니다. 잠시 숨을 고르고 당신의 마음을 고요히 관찰해 보십시오.",
            "과거는 이미 지나갔고 미래는 아직 오지 않았습니다. 오직 현재 이 순간을 충실히 살아가는 자만이 진정한 평화에 이를 수 있습니다. 남과 비교하며 스스로를 괴롭히지 마십시오. 무소의 뿔처럼 혼자서 가라 하신 가르침대로, 당신 내면의 불성을 믿고 묵묵히 당신의 길을 걸어가십시오.",
            "원한을 원한으로 갚는다면 원한은 결코 쉬지 않습니다. 오직 자비와 사랑만이 미움을 멈추게 할 수 있습니다. 당신을 힘들게 하는 인연조차 당신의 수행을 돕는 스승으로 여기십시오. 모든 생명은 고귀하며, 당신 또한 이미 그 자체로 완전한 존재임을 잊지 마시기 바랍니다."
        ]
    },
    jesus: {
        name: "예수",
        title: "예수 그리스도",
        color: "red-600",
        responses: [
            "수고하고 무거운 짐 진 자들아 다 내게로 오라, 내가 너희를 쉬게 하리라 하였습니다. 당신의 걱정과 두려움을 내려놓으십시오. 사랑은 모든 것을 덮어주고 모든 것을 믿으며 모든 것을 견뎌냅니다. 당신이 겪는 시련은 당신을 더 단단하게 만들기 위한 과정임을 믿으시기 바랍니다.",
            "네 이웃을 네 몸과 같이 사랑하라는 말씀은 곧 당신 자신에 대한 사랑에서 시작됩니다. 남을 판단하기 전에 먼저 당신의 마음속에 있는 들보를 보십시오. 용서하십시오. 일곱 번뿐만 아니라 일흔 번씩 일곱 번이라도 용서할 때, 당신의 영혼은 진정한 자유를 얻게 될 것입니다.",
            "구하라 그러면 너희에게 주실 것이요, 찾으라 그러면 찾아낼 것이라 하였습니다. 포기하지 마십시오. 겨자씨 한 알 만한 믿음만 있어도 당신은 산을 옮길 수 있는 힘을 얻게 될 것입니다. 빛이 어둠 속에 비치고 있으니, 두려워 말고 그 빛을 따라 걸어가십시오."
        ]
    },
    socrates: {
        name: "소크라테스",
        title: "철학자 소크라테스",
        color: "blue-600",
        responses: [
            "너 자신을 알라. 이것이 모든 지혜의 시작입니다. 당신이 무엇을 모르고 있는지를 깨닫는 것이야말로 진정한 앎으로 가는 첫걸음입니다. 검토되지 않는 삶은 살 가치가 없다고 했습니다. 당신의 고민을 집요하게 파고들어 보십시오. 질문을 멈추지 않을 때 답은 스스로 나타날 것입니다.",
            "악은 무지에서 비롯됩니다. 누구나 선을 행하고자 하지만 무엇이 진정한 선인지 알지 못하기에 방황하는 것입니다. 당신의 행동이 정의로운지, 그리고 당신의 영혼에 유익한지를 끊임없이 자문하십시오. 다수의 의견보다 진리에 귀를 기울이는 용기가 당신에게 필요합니다.",
            "지혜로운 사람은 자신이 아무것도 모른다는 사실을 아는 사람입니다. 저 또한 당신에게 명확한 답을 줄 수는 없으나, 대화를 통해 당신 안에 숨겨진 지혜를 이끌어낼 수는 있습니다(산파술). 비판적으로 사고하고 논리적으로 분석하십시오. 영혼을 돌보는 일이 육체를 돌보는 일보다 훨씬 중요함을 명심하십시오."
        ]
    }
};

function selectSage(id) {
    selectedSage = id;
    
    // UI 업데이트: 선택된 버튼 강조
    document.querySelectorAll('.sage-card').forEach(btn => {
        btn.classList.remove('border-stone-900', 'bg-stone-50');
        btn.classList.add('border-transparent', 'bg-white');
    });
    
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.remove('border-transparent', 'bg-white');
    activeBtn.classList.add('border-stone-900', 'bg-stone-50');

    // 첫 인사 메시지
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    addMessage('system', `${sages[id].name}님을 선택하셨습니다. 고민을 말씀해 주시면 ${sages[id].name}의 지혜로 답변해 드립니다.`);
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();

    if (!text) return;
    if (!selectedSage) {
        alert('상담하실 위인을 먼저 선택해 주세요.');
        return;
    }

    addMessage('user', text);
    input.value = '';

    // AI 답변 시뮬레이션
    setTimeout(() => {
        const sage = sages[selectedSage];
        const randomResponse = sage.responses[Math.floor(Math.random() * sage.responses.length)];
        addMessage('sage', randomResponse, sage);
    }, 800);
}

function addMessage(type, text, sage = null) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'}`;

    let content = '';
    if (type === 'user') {
        content = `<div class="bg-stone-900 text-white rounded-2xl px-4 py-2 max-w-[80%] shadow-md">${text}</div>`;
    } else if (type === 'system') {
        content = `<div class="bg-stone-200 text-stone-600 text-xs rounded-full px-4 py-1 mx-auto">${text}</div>`;
    } else {
        content = `
            <div class="flex flex-col gap-1 max-w-[80%]">
                <span class="text-xs font-bold text-stone-500 ml-2">${sage.title}</span>
                <div class="bg-white border border-stone-200 rounded-2xl px-4 py-3 shadow-sm text-stone-800">
                    ${text}
                </div>
            </div>
        `;
    }

    messageDiv.innerHTML = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 엔터 키 지원
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
