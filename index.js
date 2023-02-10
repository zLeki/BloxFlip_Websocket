console.error("____   ____.__               \n\\   \\ /   /|__| ____   ____  \n \\   Y   / |  |/    \\_/ __ \\ \n  \\     /  |  |   |  \\  ___/ \n   \\___/   |__|___|  /\\___  >\n                   \\/     \\/ ");
    function connect() {
        var verif = !1;
        const TOKEN = "<token here found in local storage>";
        (ws = new WebSocket("wss://ws.bloxflip.com/socket.io/?EIO=3&transport=websocket")).headers = {Origin: "https://bloxflip.com"}, ws.onopen = function (e) {
            e.preventDefault()
        },ws.onclose = function(e) {console.error("hung-up");connect()}, ws.onmessage = function (e) {
            var a = e.data,
                t = ['42/chat,["auth", "' + TOKEN + '"]', '42/cups,["auth","' + TOKEN + '"]', '42/jackpot,["auth","' + TOKEN + '"]', '42/rouletteV2,["auth","' + TOKEN + '"]', '42/roulette,["auth","' + TOKEN + '"]', '42/crash,["auth","' + TOKEN + '"]', '42/wallet,["auth","' + TOKEN + '"]', '42/marketplace,["auth","' + TOKEN + '"]', '42/case-battles,["auth","' + TOKEN + '"]', '42/mod-queue,["auth","' + TOKEN + '"]', '42/cloud-games,["auth","' + TOKEN + '"]', '42/feed,["auth","' + TOKEN + '"]'];
            if (!0 === a.includes("new-chat-message") && a.includes("new-chat-message") && !1 === verif) {

                for (var s = 0;
                     s < t.length;
                     s++) ws.send(t[s]);
                verif = !0
            }else if (!0 === verif && !0 === a.includes("new-chat-message")) {
                j=JSON.parse(a.toString().split('42/chat,["new-chat-message",')[1].split("]")[0]);
                console.log(j.bloxFlipUser.robloxUsername, ":", j.content);
            }
            else if (!0 === a.startsWith("0")) {
                queries1 = ["40/chat,", "40/cups,", "40/jackpot,", "40/rouletteV2,", "40/roulette,", "40/crash,", "40/wallet,", "40/marketplace,", "40/case-battles,", "40/mod-queue,", "40/feed,", "40/cloud-games,"];
                for (var s = 0; s < queries1.length; s++)
                    ws.send(queries1[s])
            }
        }
    }
    document.body.innerHTML = (`<head> <style>@keyframes move_wave{0%{transform: translateX(0) translateZ(0) scaleY(1)}50%{transform: translateX(-25%) translateZ(0) scaleY(0.55)}100%{transform: translateX(-50%) translateZ(0) scaleY(1)}}.waveWrapper{overflow: hidden; position: absolute; left: 0; right: 0; bottom: 0; top: 0; margin: auto;}.waveWrapperInner{position: absolute; width: 100%; overflow: hidden; height: 100%; bottom: -1px; background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);}.bgTop{z-index: 15; opacity: 0.5;}.bgMiddle{z-index: 10; opacity: 0.75;}.bgBottom{z-index: 5;}.wave{position: absolute; left: 0; width: 200%; height: 100%; background-repeat: repeat no-repeat; background-position: 0 bottom; transform-origin: center bottom;}.waveTop{background-size: 50% 100px;}.waveAnimation .waveTop{animation: move-wave 3s; -webkit-animation: move-wave 3s; -webkit-animation-delay: 1s; animation-delay: 1s;}.waveMiddle{background-size: 50% 120px;}.waveAnimation .waveMiddle{animation: move_wave 10s linear infinite;}.waveBottom{background-size: 50% 100px;}.waveAnimation .waveBottom{animation: move_wave 15s linear infinite;}.text{text-align: center; color: white; font-family: Arial;}</style></head><body><div class="waveWrapper waveAnimation"> <div class="waveWrapperInner bgTop"> <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div></div><div class="waveWrapperInner bgMiddle"> <h1 class="text">Started</h1> <h3 class="text">you can switch tabs</h3> <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div></div><div class="waveWrapperInner bgBottom"> <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div></div></div></body>`)
    connect();
