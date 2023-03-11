(()=>{"use strict";let e="";function f(e){return e.getFlag("core","sourceId")}function t(...f){let[t,n]=f;return t=`${e}.${t}`,n?game.i18n.format(t,n):game.i18n.localize(t)}function n(f){const n=(...e)=>t(`${f}.${e[0]}`,e[1]);return Object.defineProperties(n,{warn:{value:(...e)=>function(...e){const[f,t,n]=e;s(f,"warning",t,n)}(`${f}.${e[0]}`,e[1],e[2]),enumerable:!1,configurable:!1},info:{value:(...e)=>a(`${f}.${e[0]}`,e[1],e[2]),enumerable:!1,configurable:!1},error:{value:(...e)=>function(...e){const[f,t,n]=e;s(f,"error",t,n)}(`${f}.${e[0]}`,e[1],e[2]),enumerable:!1,configurable:!1},has:{value:t=>function(f){return game.i18n.has(`${e}.${f}`,!1)}(`${f}.${t}`),enumerable:!1,configurable:!1},path:{value:t=>function(f){return`${e}.${f}`}(`${f}.${t}`),enumerable:!1,configurable:!1},template:{value:(e,{hash:f})=>n(e,f),enumerable:!1,configurable:!1}}),n}function s(e,f,n,s){const a="string"==typeof f?f:"info",o="object"==typeof f?f:"object"==typeof n?n:void 0,c="boolean"==typeof f?f:"boolean"==typeof n?n:s??!1;ui.notifications.notify(t(e,o),a,{permanent:c})}function a(...e){const[f,t,n]=e;s(f,"info",t,n)}const o=[{feat:"Compendium.pf2e.classfeatures.09iL38CZZEa0q0Mt",effect:"Compendium.pf2e.feat-effects.fsjO5oTKttsbpaKl"},{feat:"Compendium.pf2e.feats-srd.tDWc2LQNl0Op1Auq",effect:"Compendium.pf2e-stances.effects.PS17dsXkTdQmOv7w"},{feat:"Compendium.pf2e.feats-srd.j1hhTLOq7o80XCyV",effect:"Compendium.pf2e-stances.effects.TZDeooWoSNiU7fa3"},{feat:"Compendium.pf2e.feats-srd.AkV4Jyllo6nlK2Sl",effect:"Compendium.pf2e.feat-effects.CgxYa0lrLUjS2ZhI"},{feat:"Compendium.pf2e.feats-srd.xQuNswWB3eg1UM28",effect:"Compendium.pf2e.feat-effects.2Qpt0CHuOMeL48rN",replace:"Compendium.pf2e.feats-srd.AkV4Jyllo6nlK2Sl"},{feat:"Compendium.pf2e.feats-srd.bf7NCeKqDClaqhTR",effect:"Compendium.pf2e.feat-effects.nwkYZs6YwXYAJ4ps"},{feat:"Compendium.pf2e.feats-srd.1p5ErCp33nGOzEsk",effect:"Compendium.pf2e.feat-effects.LxSev4GNKv26DbZw"},{feat:"Compendium.pf2e.feats-srd.OEGhbRgW6wRbccns",effect:"Compendium.pf2e-stances.effects.qBR3kqGCeKp3T2Be"},{feat:"Compendium.pf2e.feats-srd.8sy3sHwOHS4ImwvJ",effect:"Compendium.pf2e.feat-effects.qUowHpn79Dpt1hVn"},{feat:"Compendium.pf2e.feats-srd.R7c4PyTNkZb0yvoT",effect:"Compendium.pf2e.feat-effects.KBEJVRrie2JTHWIK"},{feat:"Compendium.pf2e.feats-srd.FYz5eQeTox9IDkSd",effect:"Compendium.pf2e.feat-effects.KiuBRoMFxL2Npt51"},{feat:"Compendium.pf2e.feats-srd.9VGmE7X4aK2W8YWj",effect:"Compendium.pf2e.feat-effects.KiuBRoMFxL2Npt51"},{feat:"Compendium.pf2e.feats-srd.6GN1zh3RcnZhrzxP",effect:"Compendium.pf2e.feat-effects.GGebXpRPyONZB3eS"},{feat:"Compendium.pf2e.feats-srd.80CEAB05TP5ki9iW",effect:"Compendium.pf2e-stances.effects.GvqB4M8LrHpzYEvl"},{feat:"Compendium.pf2e.feats-srd.DqD7htz8Sd1dh3BT",effect:"Compendium.pf2e.feat-effects.RozqjLocahvQWERr"},{feat:"Compendium.pf2e.feats-srd.nRjyyDulHnP5OewA",effect:"Compendium.pf2e.feat-effects.UZKIKLuwpQu47feK",replace:"Compendium.pf2e.feats-srd.DqD7htz8Sd1dh3BT"},{feat:"Compendium.pf2e.feats-srd.rFaUJtB46scuAidY",effect:"Compendium.pf2e-stances.effects.mark4VEQoynfYNBF"},{feat:"Compendium.pf2e.feats-srd.YeyOqNFKaeuOTiJr",effect:"Compendium.pf2e-stances.effects.zzC2qZwEKf4Ja3xD"},{feat:"Compendium.pf2e.feats-srd.bvOsJNeI0ewvQsFa",effect:"Compendium.pf2e.feat-effects.kzEPq4aczYb6OD2h"},{feat:"Compendium.pf2e.feats-srd.x9cYkB8DrUBBwqJd",effect:"Compendium.pf2e.feat-effects.tPKXLtDJ3bzJcXlv"},{feat:"Compendium.pf2e.feats-srd.Jwq5o13uZF3ooln1",effect:"Compendium.pf2e.feat-effects.pkcr9w5x6bKzl3om"},{feat:"Compendium.pf2e.feats-srd.ZghzLmYgeE19GqjP",effect:"Compendium.pf2e-stances.effects.W8CKuADdbODpBh6O"},{feat:"Compendium.pf2e.feats-srd.KMVXUgFArcftg1jQ",effect:"Compendium.pf2e.feat-effects.6IsZQpwRJQWIzdGx"},{feat:"Compendium.pf2e.feats-srd.rByA8NDI6ZtNgBeT",effect:"Compendium.pf2e-stances.effects.NWOmJ6WJFheaGhho"},{feat:"Compendium.pf2e.feats-srd.YG2RxXE9SMfwo6wP",effect:"Compendium.pf2e.feat-effects.1dxD3xsTzak6GNj5"},{feat:"Compendium.pf2e.feats-srd.ZL5UU9quCTvcWzfY",effect:"Compendium.pf2e.feat-effects.gYpy9XBPScIlY93p"},{feat:"Compendium.pf2e.feats-srd.RzhnxgiAopWILCvs",effect:"Compendium.pf2e.feat-effects.l4QUaedYofnfXig0"},{feat:"Compendium.pf2e.feats-srd.hPDerDCYmag3s0dP",effect:"Compendium.pf2e.feat-effects.6EDoy3OSFZ4L3Vs7"},{feat:"Compendium.pf2e.feats-srd.C3MgEkPNaIhTddbr",effect:"Compendium.pf2e.feat-effects.vjvcccAwdkOLA1Fc"},{feat:"Compendium.pf2e.feats-srd.Yl2wYv24v5kw95aS",effect:"Compendium.pf2e.feat-effects.9HPxAKpP3WJmICBx"},{feat:"Compendium.pf2e.feats-srd.Ziky4XVV7syXVbUg",effect:"Compendium.pf2e-stances.effects.kDTiRg9vVOYNnTyr"},{feat:"Compendium.pf2e.feats-srd.BtZJJClWCpc31Ven",effect:"Compendium.pf2e.feat-effects.OeZ0E1oUKyGPxPy0"},{feat:"Compendium.pf2e.feats-srd.rbiMK71SvGZGRLJ1",effect:"Compendium.pf2e.feat-effects.Im5JBInybWFbHEYS"},{feat:"Compendium.pf2e.feats-srd.knZUN4sYExIyRC4F",effect:"Compendium.pf2e.feat-effects.QDQwHxNowRwzUx9R"},{feat:"Compendium.pf2e.feats-srd.tRHjUCl0xqG97nok",effect:"Compendium.pf2e-stances.effects.Unfl4QQURWaX2zfd"},{feat:"Compendium.pf2e.feats-srd.RsNvCSrCN7czHC0G",effect:"Compendium.pf2e-stances.effects.Unfl4QQURWaX2zfd"},{feat:"Compendium.pf2e.feats-srd.O0POcPD2aELYTcIK",effect:"Compendium.pf2e-stances.effects.YkiTA74FrUUu5IvI"},{feat:"Compendium.pf2e.feats-srd.6cQSPqXoAO6oJl0i",effect:"Compendium.pf2e.feat-effects.RXbfq6oqzVnW6xOV"},{feat:"Compendium.pf2e.feats-srd.hT0pVPqFuiEsmRb8",effect:"Compendium.pf2e.feat-effects.P80mwvCAEncR2snK"},{feat:"Compendium.pf2e.feats-srd.UjEeHamC2C8JfgJz",effect:"Compendium.pf2e.feat-effects.CQfkyJkRHw4IHWhv"},{feat:"Compendium.pf2e.feats-srd.GuEdTz1VMEptQnOd",effect:"Compendium.pf2e.feat-effects.rp1YauUSULuqW8rs"},{feat:"Compendium.pf2e.feats-srd.7FRYyKXDKjGoANYj",effect:"Compendium.pf2e.feat-effects.BCyGDKcplkJiSAKJ"},{feat:"Compendium.pf2e.feats-srd.2tUdsoPEnW9yS8so",effect:"Compendium.pf2e.feat-effects.PMHwCrnh9W4sMu5b"},{feat:"Compendium.pf2e.feats-srd.VCjAlOvjNvFJOsG5",effect:"Compendium.pf2e.feat-effects.pf9yvKNg6jZLrE30"},{feat:"Compendium.pf2e.feats-srd.xjLbabfyQzBNT4y1",effect:"Compendium.pf2e-stances.effects.3eHMqVx30JGiJqtM"},{feat:"Compendium.pf2e.feats-srd.kTRGAST9J9ZxJZ4A",effect:"Compendium.pf2e-stances.effects.3eHMqVx30JGiJqtM"},{feat:"Compendium.pf2e.feats-srd.Tj79ePSD212EZjRM",effect:"Compendium.pf2e.feat-effects.h45sUZFs5jhuQdCE"},{feat:"Compendium.pf2e.feats-srd.IaiEZaA8erufMUCr",effect:"Compendium.pf2e.feat-effects.JefXqvhzUeBArkAP"},{feat:"Compendium.pf2e.feats-srd.wZZyasfIqwiJBQAQ",effect:"Compendium.pf2e-stances.effects.q6UokHWSEcEYWmvh"},{feat:"Compendium.pf2e.feats-srd.AN9jY1JVcU20Qdw6",effect:"Compendium.pf2e.feat-effects.b2kWJuCPj1rDMdwz"}],c=new Map(o.map((e=>[e.feat,e]))),p=new Map(o.map((e=>[e.effect,e])));function m(e){const t=[],n=[],s=new Map;for(const s of e.itemTypes.feat){const e=f(s),a=e&&c.get(e);a&&(t.push(a),a.replace&&n.push(a.replace))}for(const t of e.itemTypes.effect){const e=f(t);e&&p.has(e)&&s.set(e,t.id)}return t.filter((e=>!n.includes(e.feat))).map((e=>{const f=fromUuidSync(e.feat),t=fromUuidSync(e.effect),n=e.replace&&fromUuidSync(e.replace);if(f&&t)return{name:n?n.name:f.name,img:t.img,effectID:s.get(e.effect)??"",effectUUID:e.effect}})).filter((e=>e))}function i(e){const t=[];for(const n of e.itemTypes.effect){const e=f(n);e&&p.has(e)&&t.push({uuid:e,id:n.id})}return t}async function d(e,f){const t=await fromUuid(f);if(t){const f=await e.createEmbeddedDocuments("Item",[t.toObject()]);return f[0]?.toMessage(),!0}return!1}const u=["Compendium.pf2e.feats-srd.yeSyGnYDkl2GUNmu","Compendium.pf2e.feats-srd.LI9VtCaL5ZRk0Wo8"];async function r(e){if(!function(e,t,n){return function(e,f){return f?f.flatMap((f=>e.itemTypes[f])):e.items}(e,["feat"]).some(function(e){return Array.isArray(e)?t=>function(e,t){const n=f(e);return!!n&&t.includes(n)}(t,e):t=>f(t)===e}(t))}(e,u))return;if(i(e).length)return;const t=m(e);if(t.length)if(1===t.length){const f=t[0];await d(e,f.effectUUID)&&a("useStance",{stance:f.name})}else!function(e,f){const t=n("menu");let s=`<h3>${t("select")}</h3>`;for(let e=0;e<f.length;e++){const t=f[e];s+='<label style="height: 24px; display: block;">',s+=`<input type="radio" name="stance" value="${t.effectUUID}"`,0===e&&(s+=" checked"),s+=` style="margin-right: .5em;"> <span>${t.name}</span></label>`}s+='<div style="margin-bottom: .5em;"></div>',new Dialog({title:t("title"),content:s,buttons:{yes:{icon:'<i class="fa-solid fa-people-arrows"></i>',label:t("accept"),callback:f=>d(e,f.find("[name=stance]:checked").val())},no:{icon:'<i class="fa-solid fa-xmark"></i>',label:t("cancel")}}}).render(!0)}(e,t)}function C(e){for(const f of Object.values(ui.windows))f instanceof ActorSheet&&e===f.actor&&f.render()}function l(e){const f=b(e);if(!f)return;const t=i(f).map((e=>e.id));t.length?f.deleteEmbeddedDocuments("Item",t):C(f)}function b(e){const f=e.actor;return f&&!f.isToken&&f.isOfType("character")?f:void 0}e||(e="pf2e-stances"),Hooks.on("deleteCombatant",l),Hooks.on("createCombatant",(function(e){const f=b(e);f&&(r(f),C(f))})),Hooks.on("deleteCombat",(function(e){for(const f of e.combatants)l(f)})),Hooks.on("renderCharacterSheetPF2e",(async function(f,n){const s=f.actor;await async function(f,n){const s=m(f).sort(((e,f)=>e.name.localeCompare(f.name)));if(!s.length)return;const a=f.getActiveTokens(!0,!0).some((e=>e.inCombat)),o=n.find(".sheet-body .sheet-content [data-tab=actions] .tab-content .actions-panels [data-tab=encounter]"),c=o.find(".actions-options"),p=await renderTemplate(function(...f){return f=f.filter((e=>"string"==typeof e)),`modules/${e}/templates/${f.join("/")}`}("stances.hbs"),{stances:s,canUseStances:a&&!f.isDead,i18n:t});c.length?c.after(p):o.prepend(p)}(s,n),n.find(".sheet-body .sheet-content [data-tab=actions] .tab-content .actions-panels [data-tab=encounter] .pf2e-stances .pf2e-stances__stance").on("click",(e=>async function(e,f){const t=e.currentTarget,n=t.closest(".pf2e-stances")?.classList.contains("can-use-stances");if(!e.ctrlKey&&!n)return;const s=t.dataset.effectUuid,a=i(f),o=a.findIndex((e=>e.uuid===s));let c=!1;if(o<0)c=!0;else if(a.length){const e=a.filter((e=>e.uuid!==s)).length,f=a.filter((e=>e.uuid===s)).length>1;(e||f)&&a.splice(o,1)}a.length&&await f.deleteEmbeddedDocuments("Item",a.map((e=>e.id))),c&&d(f,s)}(e,s)))}))})();
//# sourceMappingURL=main.js.map