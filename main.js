let selectedSage = null;

const sages = {
    confucius: {
        name: "공자",
        title: "대성지성문선왕(大成至聖文宣王) 공자",
        responses: [
            "반갑습니다. 논어에서 이르기를 **'학이시습지 불역열호(學而時習之 不亦說乎)'**라 하였습니다. 배우고 때로 익히니 또한 즐겁지 아니한가라는 이 말씀은 단순히 지식의 습득을 넘어, 당신의 고민조차 삶의 소중한 배움으로 삼으라는 뜻입니다. 당신의 고통은 현재 당신이 군자로 나아가기 위한 수양의 과정에 있음을 보여주는 증거입니다. 먼저 자신의 마음을 정직하게 들여다보고, 내가 서고자 할 때 남을 먼저 세워주는 **'기욕립이립인(己欲立이立人)'**의 마음을 가져보십시오. 타인과의 관계에서 오는 갈등은 결국 예(禮)를 통해 다스려질 수 있습니다. 조급해하지 말고 매일 조금씩 자신의 덕을 쌓아간다면, 머지않아 평안을 찾게 될 것입니다. 당신의 진실된 노력을 하늘은 결코 외면하지 않을 것입니다.",
            "당신의 고민에 대해 **'기소불욕 물시어인(己所不欲 勿施於人)'**이라는 가르침을 드리고 싶습니다. 내가 당하고 싶지 않은 일을 남에게 하지 말라는 이 '서(恕)'의 정신이야말로 인(仁)의 시작입니다. 현재 겪고 계신 시련 속에서 혹시 자신이나 타인에게 가혹하지 않았는지 되돌아보십시오. 군자는 어려움 속에서도 자신의 도를 지키며, 결코 남을 탓하지 않는 법입니다. 하늘은 스스로 돕는 자를 돕는다고 하였으니, 당신이 예의에 어긋나지 않게 행동한다면 세상의 모든 것이 당신의 편이 될 것입니다. 부디 마음의 평정을 유지하고 인의 도를 실천하는 데 힘쓰시기 바랍니다. 진정한 평화는 외부가 아니라 당신의 내면에서 시작됩니다.",
            "지혜로운 사람은 당황하지 않고, 어진 사람은 근심하지 않으며, 용기 있는 사람은 두려워하지 않는다고 하였습니다. **'지자불혹 인자불우 용자불구(知者不惑 仁者不憂 勇者不懼)'**의 경지는 하루아침에 이루어지는 것이 아닙니다. 당신이 지금 느끼는 혼란은 아직 지혜와 덕이 온전히 쌓이지 않았기 때문일 수 있으나, 이를 자각하는 것만으로도 이미 훌륭한 시작입니다. 공자는 '아침에 도를 들으면 저녁에 죽어도 좋다'고 하였습니다. 그만큼 진리를 향한 열망이 중요합니다. 당신의 고민을 학문의 동력으로 삼아, 묵묵히 자신의 자리를 지키며 도를 닦아 나가십시오. 반드시 밝은 빛이 비칠 날이 올 것이니 결코 포기하지 마십시오."
        ]
    },
    buddha: {
        name: "부처",
        title: "석가모니 세존(世尊)",
        responses: [
            "고통의 바다에서 방황하는 중생이여, **'일체유심조(一切唯心造)'**라는 진리를 기억하십시오. 모든 현상은 오직 마음이 지어내는 것이며, 당신이 느끼는 괴로움 역시 실체가 없는 환상에 불과합니다. 금강경에서는 **'범소유상 개시허망(凡所有相 皆은 虛妄)'**이라 하여, 무릇 형상이 있는 모든 것은 허망하다고 설했습니다. 당신이 집착하고 있는 그 고민의 끈을 잠시 내려놓아 보십시오. 마음이 고요해지면 거울에 비친 모습처럼 세상의 진실이 보일 것입니다. 당신 안에 이미 부처의 성품이 깃들어 있으니, 외부에서 답을 찾으려 하지 말고 내면의 평화를 일깨우는 수행에 정진하시기를 권합니다. 고요함 속에 모든 답이 있습니다.",
            "나고 죽는 것은 생겨나고 멸하는 법이니, 생멸이 멸하고 나면 적멸이 즐거움이 된다는 **'생멸멸이 적멸위락(生滅滅已 寂멸爲樂)'**의 법문을 드립니다. 세상의 모든 만물은 변하기 마련(**'제행무상(諸行無常)'**)입니다. 당신의 슬픔도, 기쁨도, 그리고 지금의 고민도 영원히 머물지 않고 흘러가는 구름과 같습니다. 흐르는 강물에 발을 두 번 담글 수 없듯이, 이 순간 또한 지나가면 다시 오지 않을 찰나입니다. 과거에 얽매이지 말고 미래를 두려워하지 마십시오. 오직 현재의 호흡에 집중하며 자신을 관찰할 때, 비로소 무거운 짐을 벗고 진정한 자유인이 될 수 있을 것입니다. 자애로운 마음으로 스스로를 보듬으십시오.",
            "독 묻은 화살을 맞았을 때, 누가 쏘았는지 화살은 무엇으로 만들어졌는지를 따지기보다 먼저 화살을 뽑는 것이 급선무입니다. 당신의 고민 역시 마찬가지입니다. 원인을 분석하고 남을 원망하기보다, 지금 당장 당신의 마음을 맑게 닦는 것이 중요합니다. **'자등명 법등명(自燈明 法燈明)'**이라 하셨으니, 자신을 등불로 삼고 법을 등불로 삼아 묵묵히 걸어가십시오. 자비로운 마음으로 자신과 세상을 대할 때 미움은 사라지고 평온이 찾아올 것입니다. 당신은 이미 충분히 고귀한 존재이며, 깨달음의 길은 바로 당신 발밑에 있음을 잊지 마십시오. 모든 존재는 존엄하며 당신 또한 그러합니다."
        ]
    },
    jesus: {
        name: "예수",
        title: "구주(救主) 예수 그리스도",
        responses: [
            "사랑하는 자여, 마음을 다하고 목숨을 다하고 뜻을 다하여 하나님을 사랑하고 **'네 이웃을 네 몸과 같이 사랑하라(Love your neighbor as yourself)'** 하였습니다. 당신의 고민이 관계에서 오는 것이라면, 먼저 용서의 마음을 가져보십시오. 일곱 번씩 일흔 번이라도 용서하라는 말씀은 당신의 영혼을 미움의 감옥에서 해방시키기 위함입니다. 당신이 겪는 시련은 결코 당신을 무너뜨리기 위한 것이 아니라, 정금과 같이 단련하시려는 신의 섭리임을 믿으십시오. 구하라 그러면 주실 것이요 찾으라 그러면 찾을 것이니, 소망을 잃지 말고 기도로 마음의 평화를 간구하시기 바랍니다. 당신은 결코 혼자가 아닙니다.",
            "수고하고 무거운 짐 진 자들아 다 내게로 오라 내가 너희를 쉬게 하리라 하신 약속을 믿으십시오. 당신의 어깨 위에 놓인 짐이 너무 무겁다면 잠시 그분께 맡겨보는 지혜가 필요합니다. **'진리가 너희를 자유롭게 하리라(The truth will set you free)'** 하였으니, 세상의 헛된 유혹과 두려움에서 벗어나 진리의 길을 걸어가십시오. 당신은 세상의 소금이요 빛입니다. 당신의 선한 행실이 세상을 밝히는 등불이 될 것이니, 낙심하지 말고 선을 행하십시오. 고난은 잠시뿐이며 영원한 기쁨이 당신을 기다리고 있음을 기억하며 강하고 담대하게 나아가시기를 축복합니다. 평안이 당신과 함께할 것입니다.",
            "믿음, 소망, 사랑 중에 제일은 사랑이라 하였습니다. 당신의 고민을 해결하는 유일한 열쇠는 바로 사랑입니다. 자신을 사랑하고, 당신을 아프게 하는 자까지도 사랑으로 품으려 노력할 때 기적이 일어납니다. **'비판을 받지 아니하려거든 비판하지 말라'**는 말씀을 기억하며, 타인의 허물보다 자신의 내면을 먼저 살피십시오. 좁은 문으로 들어가기를 힘쓰십시오. 많은 이들이 가는 넓은 길은 멸망으로 인도하지만, 생명으로 인도하는 문은 좁고 길이 협착하여 찾는 이가 적습니다. 당신이 선택한 이 진리의 길 끝에는 반드시 영광스러운 생명의 면류관이 기다리고 있을 것입니다. 끝까지 믿음을 지키십시오."
        ]
    },
    socrates: {
        name: "소크라테스",
        title: "지혜의 산파(産婆) 소크라테스",
        responses: [
            "안녕한가, 젊은이여. 자네는 스스로 지혜롭다고 생각하는가? 나는 단 하나만을 알고 있다네. 그것은 바로 **'내가 아무것도 모른다는 사실(I know that I know nothing)'**일세. 자네의 고민 역시 자네가 무엇을 진실로 알고 있는지, 아니면 단지 안다고 착각하고 있는지를 구별하는 데서 시작되어야 하네. 검토되지 않은 삶은 살 가치가 없다고 했네. 자네의 고민이 무엇이든, 그것의 본질이 무엇인지 나와 함께 문답을 통해 파헤쳐 보지 않겠나? 진리는 외부의 권위가 주는 것이 아니라 자네 영혼 깊숙한 곳에서 태어나는 것이라네. 나는 단지 산파처럼 자네의 지혜가 순산되도록 도울 뿐이라네. 두려움 없이 질문하게나.",
            "자네의 영혼을 돌보게나. 육체의 안락이나 명예, 돈보다 중요한 것은 영혼이 얼마나 선하고 지혜로운가 하는 문제라네. **'너 자신을 알라(Gnothi Seauton)'**는 델포이 신전의 경구는 오늘날 자네에게도 여전히 유효한 명령일세. 자네를 괴롭히는 문제들이 정말로 자네의 영혼을 타락시킬 수 있는 것들인가? 만약 그렇지 않다면 그것은 두려워할 대상이 아니네. 죽음조차 선한 사람에게는 해가 될 수 없다고 나는 믿네. 자네가 정의를 실천하고 진리를 추구하는 길에 있다면, 세상의 어떤 시련도 자네의 고귀함을 훼손할 수 없음을 명심하고 당당하게 생각의 근육을 키워나가게나. 이성이 자네를 인도할 것이네.",
            "정의란 무엇인가, 절제란 무엇인가를 끊임없이 묻는 과정이 바로 철학이라네. 자네의 고민이 도덕적인 갈등이라면, 다수의 목소리에 귀를 기울이기보다 오직 '이성'의 목소리에 집중하게나. 군중의 의견은 때로 독배와 같아서 진리를 흐리게 한다네. **'지행합일(知行合一)'**, 즉 진실로 아는 사람은 반드시 행동하게 되어 있네. 자네가 무엇이 옳은지 알면서도 행하지 못한다면, 그것은 진정으로 아는 것이 아니네. 자네의 무지를 자각하고, 더 나은 인간이 되기 위해 끊임없이 질문하고 탐구하게나. 그 과정 자체가 이미 자네를 구원으로 인도하는 지혜의 길임을 믿어 의심치 않네. 용기를 내어 진리의 길을 걷게나."
        ]
    }
};

function selectSage(id) {
    selectedSage = id;
    document.querySelectorAll('.sage-card').forEach(btn => {
        btn.classList.remove('border-amber-800', 'bg-amber-50');
        btn.classList.add('border-transparent', 'bg-white');
    });
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.remove('border-transparent', 'bg-white');
    activeBtn.classList.add('border-amber-800', 'bg-amber-50');

    const chatMessages = document.getElementById('chat-messages');
    chatMessages.innerHTML = '';
    addMessage('system', `${sages[id].name}님과의 깊이 있는 상담이 시작되었습니다. 고민을 말씀해 주세요.`);
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value.trim();
    if (!text) return;
    if (!selectedSage) {
        alert('먼저 상담하실 위인을 선택해 주세요.');
        return;
    }
    addMessage('user', text);
    input.value = '';
    setTimeout(() => {
        const sage = sages[selectedSage];
        const randomResponse = sage.responses[Math.floor(Math.random() * sage.responses.length)];
        addMessage('sage', randomResponse, sage);
    }, 1000);
}

function addMessage(type, text, sage = null) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `flex ${type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`;
    let content = '';
    if (type === 'user') {
        content = `<div class="bg-stone-900 text-white rounded-3xl px-8 py-4 max-w-[85%] shadow-xl border border-stone-800">${text}</div>`;
    } else if (type === 'system') {
        content = `<div class="bg-stone-200 text-stone-600 text-[10px] font-bold rounded-full px-6 py-2 mx-auto tracking-widest uppercase">${text}</div>`;
    } else {
        content = `
            <div class="flex flex-col gap-2 max-w-[85%]">
                <span class="text-xs font-extrabold text-amber-900 ml-4 serif uppercase tracking-widest">${sage.title}</span>
                <div class="bg-white border-2 border-stone-100 rounded-[32px] px-8 py-6 shadow-xl text-stone-800 leading-relaxed italic text-lg shadow-amber-900/5">
                    ${text.replace(/\*\*(.*?)\*\*/g, '<span class="hanja">$1</span>')}
                </div>
            </div>
        `;
    }
    messageDiv.innerHTML = content;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.getElementById('user-input').addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
