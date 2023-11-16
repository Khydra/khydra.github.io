let _debuggerGold = document.createElement('div');
_debuggerGold.id = "debugger-gold";
_debuggerGold.className = "debugger-button";
_debuggerGold.innerHTML = "+300k"
_screen.appendChild(_debuggerGold);
_debuggerGold.addEventListener('click',()=>changeGold(300000));

let _debuggerGems = document.createElement('div');
_debuggerGems.id = "debugger-gems";
_debuggerGems.className = "debugger-button";
_debuggerGems.innerHTML = "+30❄"
_screen.appendChild(_debuggerGems);
_debuggerGems.addEventListener('click',()=>changeGems(30));

let _debuggerCookies = document.createElement('div');
_debuggerCookies.id = "debugger-cookies";
_debuggerCookies.className = "debugger-button";
_debuggerCookies.innerHTML = "+10🍪"
_screen.appendChild(_debuggerCookies);
_debuggerCookies.addEventListener('click',()=>changeCookies(10));