/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

export function loadProject() {
  const project = document.getElementById('project-select').value;
  Blockly.serialization.workspaces.load(projectMap.get(project), Blockly.getMainWorkspace());
}

const projectMap = new Map();
projectMap.set('butterfly', {blocks: {blocks: [
  {"type":"p5_setup","id":"5.{;T}3Qv}Awi:1M$:ut","x": 10,"y": 10,"deletable":false,"inputs":{"STATEMENTS":{"block":{"type":"p5_canvas","id":"7tN/x36XFFw-OO~S10|!","deletable":false,"movable":false,"fields":{"WIDTH":400,"HEIGHT":400}}}}},
  {"type":"p5_draw","id":"3iI4f%2#Gmk}=OjI7(8h","x": 10,"y": 70, "deletable":false,"inputs":{"STATEMENTS":{"block":{"type":"p5_stroke","id":"u_/M:dDBrWfCiK:p~K!O","inputs":{"COLOUR":{"shadow":{"type":"colour_picker","id":"_I6rEac**xSXj`s(,;xb","fields":{"COLOUR":"#000000"}}}},"next":{"block":{"type":"p5_fill","id":"k-mgL[a0)MO2+itF_e;(","inputs":{"COLOUR":{"shadow":{"type":"colour_picker","id":"c}n~i{BPBbLtXM#:#rE@","fields":{"COLOUR":"#000000"}}}},"next":{"block":{"type":"p5_ellipse","id":"JH(l3v]CpJ7{[G{59.w|","inputs":{"X":{"shadow":{"type":"math_number","id":"D%9h5~v|2{z%6;`CE1TK","fields":{"NUM":200}}},"Y":{"shadow":{"type":"math_number","id":"0sye!%g1hlq}GnxE$j_%","fields":{"NUM":200}}},"WIDTH":{"shadow":{"type":"math_number","id":"XuX{el}s3P@OPpjbn/a[","fields":{"NUM":30}}},"HEIGHT":{"shadow":{"type":"math_number","id":"sfurC/Jo(0bD]++wq-!0","fields":{"NUM":80}}}},"next":{"block":{"type":"p5_stroke","id":"Q#8(Ho=XnVDjDSk$^%yf","inputs":{"COLOUR":{"shadow":{"type":"colour_picker","id":"Ag%ZWu;_:Ruc{-QJ^/?`","fields":{"COLOUR":"#000000"}}}},"next":{"block":{"type":"p5_line","id":"Dt{j%x03cSt(g_)Q!TDX","inputs":{"X1":{"shadow":{"type":"math_number","id":"92NJg{X~=MZ=#}*CD#J(","fields":{"NUM":200}}},"Y1":{"shadow":{"type":"math_number","id":"CK8tDQc`[50}^di*C2n8","fields":{"NUM":160}}},"X2":{"shadow":{"type":"math_number","id":"QL`a!PHa}]h@DR#GvnD}","fields":{"NUM":180}}},"Y2":{"shadow":{"type":"math_number","id":"hchg50UXE}lzzb9L7Aeg","fields":{"NUM":140}}}},"next":{"block":{"type":"p5_line","id":"I`qib7^QJrlE9SYdQo)+","inputs":{"X1":{"shadow":{"type":"math_number","id":"~-X4Rb2Qw!(DKo:xa(;~","fields":{"NUM":200}}},"Y1":{"shadow":{"type":"math_number","id":"f~|%t[~-nv9PM[OcTy1r","fields":{"NUM":160}}},"X2":{"shadow":{"type":"math_number","id":"4tx}rXA8i5a=R9[zfdhF","fields":{"NUM":220}}},"Y2":{"shadow":{"type":"math_number","id":"R`-ENA~n,i-][QL!`@![","fields":{"NUM":140}}}},"next":{"block":{"type":"p5_stroke","id":"mrzA/bPA$mW07)KyHsQY","inputs":{"COLOUR":{"shadow":{"type":"colour_picker","id":"c)?%]8~7aX!haT_H2edM","fields":{"COLOUR":"#cc33cc"}}}},"next":{"block":{"type":"p5_fill","id":"yi/)`7Y!SAaA%/a^s2Nn","inputs":{"COLOUR":{"shadow":{"type":"colour_picker","id":"z/3?*9(06PhHI0_7Qfr}","fields":{"COLOUR":"#cc33cc"}}}},"next":{"block":{"type":"p5_ellipse","id":"{ELTrO/Ph!B6-hp!m@m/","inputs":{"X":{"shadow":{"type":"math_number","id":"P%)V-IBs`amGlRT2G:38","fields":{"NUM":160}}},"Y":{"shadow":{"type":"math_number","id":"eK),XD+TPQ)~FLA(|ldA","fields":{"NUM":180}}},"WIDTH":{"shadow":{"type":"math_number","id":"Szt+RNk(wJ8{!+)UC{`5","fields":{"NUM":50}}},"HEIGHT":{"shadow":{"type":"math_number","id":"vP!ZyR9E%{P4*?]^nVHb","fields":{"NUM":50}}}},"next":{"block":{"type":"p5_ellipse","id":"R!OpvyGRtRwqz7n?,Tns","inputs":{"X":{"shadow":{"type":"math_number","id":"p8IeF1M/jD8_T^0VvuZ[","fields":{"NUM":165}}},"Y":{"shadow":{"type":"math_number","id":"91mwj^K8}CYSTaM$8;O*","fields":{"NUM":220}}},"WIDTH":{"shadow":{"type":"math_number","id":"x/%XL!zV9nA`$^/uZ6T(","fields":{"NUM":40}}},"HEIGHT":{"shadow":{"type":"math_number","id":"k#dAyU$Np-3jR0z87+^?","fields":{"NUM":30}}}},"next":{"block":{"type":"p5_ellipse","id":"Y%H$:*wQV9B3Vlq0`Rzu","inputs":{"X":{"shadow":{"type":"math_number","id":"2M6ThVZq!-#?W8VvlH+m","fields":{"NUM":240}}},"Y":{"shadow":{"type":"math_number","id":":8Sio!fPy$(Kq2o6rt`c","fields":{"NUM":180}}},"WIDTH":{"shadow":{"type":"math_number","id":"U_$QTQ)|F%r~E:)fj;}B","fields":{"NUM":50}}},"HEIGHT":{"shadow":{"type":"math_number","id":"IC:VRlY34ga^4_49WbP^","fields":{"NUM":50}}}},"next":{"block":{"type":"p5_ellipse","id":"F0A^/ede(cJ[b/p@z[;$","inputs":{"X":{"shadow":{"type":"math_number","id":"xDK;)Hw2p;=!5N6vv%m4","fields":{"NUM":235}}},"Y":{"shadow":{"type":"math_number","id":"8dMco?W9_o7!kivH+fSk","fields":{"NUM":220}}},"WIDTH":{"shadow":{"type":"math_number","id":"#iEG|_HZf6+sd7jnF,SK","fields":{"NUM":40}}},"HEIGHT":{"shadow":{"type":"math_number","id":"TXJYM/cE4]_ZNK^jmf17","fields":{"NUM":30}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}]}});