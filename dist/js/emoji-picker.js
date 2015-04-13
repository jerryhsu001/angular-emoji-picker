'use strict';

angular.module('vkEmojiPicker', ['ngSanitize']).run([
  '$templateCache', function($templateCache) {
    // $templateCache.put('template/emoji-picker/button-emoji.html',
    //
    // );
    //
    //$templateCache.put('template/emoji-picker/popover-emoji.html',
    //  '<div class="emoji-popover" tabindex="-1">' +
    //    //'<div class="arrow"></div>' +
    //    //'<h3 class="popover-title" ng-bind-html="title" ng-show="title"></h3>' +
    //    //'<div class="popover-content">' +
    //    //  '<div class="emoji-container">' +
    //    //    '<div class="emoji-groups">' +
    //    //      '<i class="emoji-group {{ ::group.icon.name }}"' +
    //    //      ' ng-class="(group.icon.selected === selectedGroup.icon.selected) ? selectedGroup.icon.selected : \'\'"' +
    //    //      ' ng-repeat="group in ::groups" ng-click="changeGroup(group)"></i>' +
    //    //      '<div class="pull-right close-button-holder">' +
    //    //        '<button type="button" class="close" ng-click="$hide()">&times;</button>' +
    //    //      '</div>' +
    //    //    '</div>' +
    //    //    '<i class="emoji-picker emoji-{{ ::toClassName(emoji) }}" ng-repeat="emoji in selectedGroup.emoji" ng-click="append(emoji)"></i>' +
    //    //  '</div>' +
    //    //'</div>' +
    //  '</div>'
    //);

    //<div class="emoji-menu" style="top: 292px; left: 735px;"><div class="emoji-items-wrap1"><table class="emoji-menu-tabs"><tbody><tr><td><a class="emoji-menu-tab icon-recent"></a></td><td><a class="emoji-menu-tab icon-smile-selected"></a></td><td><a class="emoji-menu-tab icon-flower"></a></td><td><a class="emoji-menu-tab icon-bell"></a></td><td><a class="emoji-menu-tab icon-car"></a></td><td><a class="emoji-menu-tab icon-grid"></a></td></tr></tbody></table><div class="emoji-items-wrap nano mobile_scrollable_wrap has-scrollbar"><div class="emoji-items nano-content" tabindex="-1" style="right: -17px;"><a href="javascript:void(0)" title=":smile:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px 0px no-repeat;background-size:540px 140px;" alt=":smile:"><span class="label">:smile:</span></a><a href="javascript:void(0)" title=":smiley:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px 0px no-repeat;background-size:540px 140px;" alt=":smiley:"><span class="label">:smiley:</span></a><a href="javascript:void(0)" title=":grinning:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px 0px no-repeat;background-size:540px 140px;" alt=":grinning:"><span class="label">:grinning:</span></a><a href="javascript:void(0)" title=":blush:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px 0px no-repeat;background-size:540px 140px;" alt=":blush:"><span class="label">:blush:</span></a><a href="javascript:void(0)" title=":relaxed:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px 0px no-repeat;background-size:540px 140px;" alt=":relaxed:"><span class="label">:relaxed:</span></a><a href="javascript:void(0)" title=":wink:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px 0px no-repeat;background-size:540px 140px;" alt=":wink:"><span class="label">:wink:</span></a><a href="javascript:void(0)" title=":heart_eyes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px 0px no-repeat;background-size:540px 140px;" alt=":heart_eyes:"><span class="label">:heart_eyes:</span></a><a href="javascript:void(0)" title=":kissing_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px 0px no-repeat;background-size:540px 140px;" alt=":kissing_heart:"><span class="label">:kissing_heart:</span></a><a href="javascript:void(0)" title=":kissing_closed_eyes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px 0px no-repeat;background-size:540px 140px;" alt=":kissing_closed_eyes:"><span class="label">:kissing_closed_eyes:</span></a><a href="javascript:void(0)" title=":kissing:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px 0px no-repeat;background-size:540px 140px;" alt=":kissing:"><span class="label">:kissing:</span></a><a href="javascript:void(0)" title=":kissing_smiling_eyes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px 0px no-repeat;background-size:540px 140px;" alt=":kissing_smiling_eyes:"><span class="label">:kissing_smiling_eyes:</span></a><a href="javascript:void(0)" title=":stuck_out_tongue_winking_eye:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px 0px no-repeat;background-size:540px 140px;" alt=":stuck_out_tongue_winking_eye:"><span class="label">:stuck_out_tongue_winking_eye:</span></a><a href="javascript:void(0)" title=":stuck_out_tongue_closed_eyes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px 0px no-repeat;background-size:540px 140px;" alt=":stuck_out_tongue_closed_eyes:"><span class="label">:stuck_out_tongue_closed_eyes:</span></a><a href="javascript:void(0)" title=":stuck_out_tongue:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px 0px no-repeat;background-size:540px 140px;" alt=":stuck_out_tongue:"><span class="label">:stuck_out_tongue:</span></a><a href="javascript:void(0)" title=":flushed:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px 0px no-repeat;background-size:540px 140px;" alt=":flushed:"><span class="label">:flushed:</span></a><a href="javascript:void(0)" title=":grin:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px 0px no-repeat;background-size:540px 140px;" alt=":grin:"><span class="label">:grin:</span></a><a href="javascript:void(0)" title=":pensive:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px 0px no-repeat;background-size:540px 140px;" alt=":pensive:"><span class="label">:pensive:</span></a><a href="javascript:void(0)" title=":relieved:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px 0px no-repeat;background-size:540px 140px;" alt=":relieved:"><span class="label">:relieved:</span></a><a href="javascript:void(0)" title=":unamused:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px 0px no-repeat;background-size:540px 140px;" alt=":unamused:"><span class="label">:unamused:</span></a><a href="javascript:void(0)" title=":disappointed:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px 0px no-repeat;background-size:540px 140px;" alt=":disappointed:"><span class="label">:disappointed:</span></a><a href="javascript:void(0)" title=":persevere:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px 0px no-repeat;background-size:540px 140px;" alt=":persevere:"><span class="label">:persevere:</span></a><a href="javascript:void(0)" title=":cry:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px 0px no-repeat;background-size:540px 140px;" alt=":cry:"><span class="label">:cry:</span></a><a href="javascript:void(0)" title=":joy:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px 0px no-repeat;background-size:540px 140px;" alt=":joy:"><span class="label">:joy:</span></a><a href="javascript:void(0)" title=":sob:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px 0px no-repeat;background-size:540px 140px;" alt=":sob:"><span class="label">:sob:</span></a><a href="javascript:void(0)" title=":sleepy:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px 0px no-repeat;background-size:540px 140px;" alt=":sleepy:"><span class="label">:sleepy:</span></a><a href="javascript:void(0)" title=":disappointed_relieved:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px 0px no-repeat;background-size:540px 140px;" alt=":disappointed_relieved:"><span class="label">:disappointed_relieved:</span></a><a href="javascript:void(0)" title=":cold_sweat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px 0px no-repeat;background-size:540px 140px;" alt=":cold_sweat:"><span class="label">:cold_sweat:</span></a><a href="javascript:void(0)" title=":sweat_smile:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -20px no-repeat;background-size:540px 140px;" alt=":sweat_smile:"><span class="label">:sweat_smile:</span></a><a href="javascript:void(0)" title=":sweat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -20px no-repeat;background-size:540px 140px;" alt=":sweat:"><span class="label">:sweat:</span></a><a href="javascript:void(0)" title=":weary:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -20px no-repeat;background-size:540px 140px;" alt=":weary:"><span class="label">:weary:</span></a><a href="javascript:void(0)" title=":tired_face:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -20px no-repeat;background-size:540px 140px;" alt=":tired_face:"><span class="label">:tired_face:</span></a><a href="javascript:void(0)" title=":fearful:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -20px no-repeat;background-size:540px 140px;" alt=":fearful:"><span class="label">:fearful:</span></a><a href="javascript:void(0)" title=":scream:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -20px no-repeat;background-size:540px 140px;" alt=":scream:"><span class="label">:scream:</span></a><a href="javascript:void(0)" title=":angry:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -20px no-repeat;background-size:540px 140px;" alt=":angry:"><span class="label">:angry:</span></a><a href="javascript:void(0)" title=":rage:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -20px no-repeat;background-size:540px 140px;" alt=":rage:"><span class="label">:rage:</span></a><a href="javascript:void(0)" title=":triumph:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -20px no-repeat;background-size:540px 140px;" alt=":triumph:"><span class="label">:triumph:</span></a><a href="javascript:void(0)" title=":confounded:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -20px no-repeat;background-size:540px 140px;" alt=":confounded:"><span class="label">:confounded:</span></a><a href="javascript:void(0)" title=":satisfied:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -20px no-repeat;background-size:540px 140px;" alt=":satisfied:"><span class="label">:satisfied:</span></a><a href="javascript:void(0)" title=":yum:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -20px no-repeat;background-size:540px 140px;" alt=":yum:"><span class="label">:yum:</span></a><a href="javascript:void(0)" title=":mask:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -20px no-repeat;background-size:540px 140px;" alt=":mask:"><span class="label">:mask:</span></a><a href="javascript:void(0)" title=":sunglasses:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -20px no-repeat;background-size:540px 140px;" alt=":sunglasses:"><span class="label">:sunglasses:</span></a><a href="javascript:void(0)" title=":sleeping:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -20px no-repeat;background-size:540px 140px;" alt=":sleeping:"><span class="label">:sleeping:</span></a><a href="javascript:void(0)" title=":dizzy_face:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -20px no-repeat;background-size:540px 140px;" alt=":dizzy_face:"><span class="label">:dizzy_face:</span></a><a href="javascript:void(0)" title=":astonished:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -20px no-repeat;background-size:540px 140px;" alt=":astonished:"><span class="label">:astonished:</span></a><a href="javascript:void(0)" title=":worried:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -20px no-repeat;background-size:540px 140px;" alt=":worried:"><span class="label">:worried:</span></a><a href="javascript:void(0)" title=":frowning:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -20px no-repeat;background-size:540px 140px;" alt=":frowning:"><span class="label">:frowning:</span></a><a href="javascript:void(0)" title=":anguished:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -20px no-repeat;background-size:540px 140px;" alt=":anguished:"><span class="label">:anguished:</span></a><a href="javascript:void(0)" title=":smiling_imp:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -20px no-repeat;background-size:540px 140px;" alt=":smiling_imp:"><span class="label">:smiling_imp:</span></a><a href="javascript:void(0)" title=":imp:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -20px no-repeat;background-size:540px 140px;" alt=":imp:"><span class="label">:imp:</span></a><a href="javascript:void(0)" title=":open_mouth:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -20px no-repeat;background-size:540px 140px;" alt=":open_mouth:"><span class="label">:open_mouth:</span></a><a href="javascript:void(0)" title=":grimacing:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -20px no-repeat;background-size:540px 140px;" alt=":grimacing:"><span class="label">:grimacing:</span></a><a href="javascript:void(0)" title=":neutral_face:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -20px no-repeat;background-size:540px 140px;" alt=":neutral_face:"><span class="label">:neutral_face:</span></a><a href="javascript:void(0)" title=":confused:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -20px no-repeat;background-size:540px 140px;" alt=":confused:"><span class="label">:confused:</span></a><a href="javascript:void(0)" title=":hushed:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -20px no-repeat;background-size:540px 140px;" alt=":hushed:"><span class="label">:hushed:</span></a><a href="javascript:void(0)" title=":no_mouth:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -40px no-repeat;background-size:540px 140px;" alt=":no_mouth:"><span class="label">:no_mouth:</span></a><a href="javascript:void(0)" title=":innocent:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -40px no-repeat;background-size:540px 140px;" alt=":innocent:"><span class="label">:innocent:</span></a><a href="javascript:void(0)" title=":smirk:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -40px no-repeat;background-size:540px 140px;" alt=":smirk:"><span class="label">:smirk:</span></a><a href="javascript:void(0)" title=":expressionless:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -40px no-repeat;background-size:540px 140px;" alt=":expressionless:"><span class="label">:expressionless:</span></a><a href="javascript:void(0)" title=":man_with_gua_pi_mao:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -40px no-repeat;background-size:540px 140px;" alt=":man_with_gua_pi_mao:"><span class="label">:man_with_gua_pi_mao:</span></a><a href="javascript:void(0)" title=":man_with_turban:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -40px no-repeat;background-size:540px 140px;" alt=":man_with_turban:"><span class="label">:man_with_turban:</span></a><a href="javascript:void(0)" title=":cop:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -40px no-repeat;background-size:540px 140px;" alt=":cop:"><span class="label">:cop:</span></a><a href="javascript:void(0)" title=":construction_worker:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -40px no-repeat;background-size:540px 140px;" alt=":construction_worker:"><span class="label">:construction_worker:</span></a><a href="javascript:void(0)" title=":guardsman:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -40px no-repeat;background-size:540px 140px;" alt=":guardsman:"><span class="label">:guardsman:</span></a><a href="javascript:void(0)" title=":baby:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -40px no-repeat;background-size:540px 140px;" alt=":baby:"><span class="label">:baby:</span></a><a href="javascript:void(0)" title=":boy:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -40px no-repeat;background-size:540px 140px;" alt=":boy:"><span class="label">:boy:</span></a><a href="javascript:void(0)" title=":girl:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -40px no-repeat;background-size:540px 140px;" alt=":girl:"><span class="label">:girl:</span></a><a href="javascript:void(0)" title=":man:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -40px no-repeat;background-size:540px 140px;" alt=":man:"><span class="label">:man:</span></a><a href="javascript:void(0)" title=":woman:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -40px no-repeat;background-size:540px 140px;" alt=":woman:"><span class="label">:woman:</span></a><a href="javascript:void(0)" title=":older_man:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -40px no-repeat;background-size:540px 140px;" alt=":older_man:"><span class="label">:older_man:</span></a><a href="javascript:void(0)" title=":older_woman:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -40px no-repeat;background-size:540px 140px;" alt=":older_woman:"><span class="label">:older_woman:</span></a><a href="javascript:void(0)" title=":person_with_blond_hair:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -40px no-repeat;background-size:540px 140px;" alt=":person_with_blond_hair:"><span class="label">:person_with_blond_hair:</span></a><a href="javascript:void(0)" title=":angel:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -40px no-repeat;background-size:540px 140px;" alt=":angel:"><span class="label">:angel:</span></a><a href="javascript:void(0)" title=":princess:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -40px no-repeat;background-size:540px 140px;" alt=":princess:"><span class="label">:princess:</span></a><a href="javascript:void(0)" title=":smiley_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -40px no-repeat;background-size:540px 140px;" alt=":smiley_cat:"><span class="label">:smiley_cat:</span></a><a href="javascript:void(0)" title=":smile_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -40px no-repeat;background-size:540px 140px;" alt=":smile_cat:"><span class="label">:smile_cat:</span></a><a href="javascript:void(0)" title=":heart_eyes_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -40px no-repeat;background-size:540px 140px;" alt=":heart_eyes_cat:"><span class="label">:heart_eyes_cat:</span></a><a href="javascript:void(0)" title=":kissing_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -40px no-repeat;background-size:540px 140px;" alt=":kissing_cat:"><span class="label">:kissing_cat:</span></a><a href="javascript:void(0)" title=":smirk_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -40px no-repeat;background-size:540px 140px;" alt=":smirk_cat:"><span class="label">:smirk_cat:</span></a><a href="javascript:void(0)" title=":scream_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -40px no-repeat;background-size:540px 140px;" alt=":scream_cat:"><span class="label">:scream_cat:</span></a><a href="javascript:void(0)" title=":crying_cat_face:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -40px no-repeat;background-size:540px 140px;" alt=":crying_cat_face:"><span class="label">:crying_cat_face:</span></a><a href="javascript:void(0)" title=":joy_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -40px no-repeat;background-size:540px 140px;" alt=":joy_cat:"><span class="label">:joy_cat:</span></a><a href="javascript:void(0)" title=":pouting_cat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -60px no-repeat;background-size:540px 140px;" alt=":pouting_cat:"><span class="label">:pouting_cat:</span></a><a href="javascript:void(0)" title=":japanese_ogre:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -60px no-repeat;background-size:540px 140px;" alt=":japanese_ogre:"><span class="label">:japanese_ogre:</span></a><a href="javascript:void(0)" title=":japanese_goblin:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -60px no-repeat;background-size:540px 140px;" alt=":japanese_goblin:"><span class="label">:japanese_goblin:</span></a><a href="javascript:void(0)" title=":see_no_evil:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -60px no-repeat;background-size:540px 140px;" alt=":see_no_evil:"><span class="label">:see_no_evil:</span></a><a href="javascript:void(0)" title=":hear_no_evil:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -60px no-repeat;background-size:540px 140px;" alt=":hear_no_evil:"><span class="label">:hear_no_evil:</span></a><a href="javascript:void(0)" title=":speak_no_evil:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -60px no-repeat;background-size:540px 140px;" alt=":speak_no_evil:"><span class="label">:speak_no_evil:</span></a><a href="javascript:void(0)" title=":skull:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -60px no-repeat;background-size:540px 140px;" alt=":skull:"><span class="label">:skull:</span></a><a href="javascript:void(0)" title=":alien:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -60px no-repeat;background-size:540px 140px;" alt=":alien:"><span class="label">:alien:</span></a><a href="javascript:void(0)" title=":hankey:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -60px no-repeat;background-size:540px 140px;" alt=":hankey:"><span class="label">:hankey:</span></a><a href="javascript:void(0)" title=":fire:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -60px no-repeat;background-size:540px 140px;" alt=":fire:"><span class="label">:fire:</span></a><a href="javascript:void(0)" title=":sparkles:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -60px no-repeat;background-size:540px 140px;" alt=":sparkles:"><span class="label">:sparkles:</span></a><a href="javascript:void(0)" title=":star2:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -60px no-repeat;background-size:540px 140px;" alt=":star2:"><span class="label">:star2:</span></a><a href="javascript:void(0)" title=":dizzy:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -60px no-repeat;background-size:540px 140px;" alt=":dizzy:"><span class="label">:dizzy:</span></a><a href="javascript:void(0)" title=":boom:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -60px no-repeat;background-size:540px 140px;" alt=":boom:"><span class="label">:boom:</span></a><a href="javascript:void(0)" title=":anger:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -60px no-repeat;background-size:540px 140px;" alt=":anger:"><span class="label">:anger:</span></a><a href="javascript:void(0)" title=":sweat_drops:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -60px no-repeat;background-size:540px 140px;" alt=":sweat_drops:"><span class="label">:sweat_drops:</span></a><a href="javascript:void(0)" title=":droplet:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -60px no-repeat;background-size:540px 140px;" alt=":droplet:"><span class="label">:droplet:</span></a><a href="javascript:void(0)" title=":zzz:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -60px no-repeat;background-size:540px 140px;" alt=":zzz:"><span class="label">:zzz:</span></a><a href="javascript:void(0)" title=":dash:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -60px no-repeat;background-size:540px 140px;" alt=":dash:"><span class="label">:dash:</span></a><a href="javascript:void(0)" title=":ear:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -60px no-repeat;background-size:540px 140px;" alt=":ear:"><span class="label">:ear:</span></a><a href="javascript:void(0)" title=":eyes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -60px no-repeat;background-size:540px 140px;" alt=":eyes:"><span class="label">:eyes:</span></a><a href="javascript:void(0)" title=":nose:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -60px no-repeat;background-size:540px 140px;" alt=":nose:"><span class="label">:nose:</span></a><a href="javascript:void(0)" title=":tongue:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -60px no-repeat;background-size:540px 140px;" alt=":tongue:"><span class="label">:tongue:</span></a><a href="javascript:void(0)" title=":lips:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -60px no-repeat;background-size:540px 140px;" alt=":lips:"><span class="label">:lips:</span></a><a href="javascript:void(0)" title=":+1:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -60px no-repeat;background-size:540px 140px;" alt=":+1:"><span class="label">:+1:</span></a><a href="javascript:void(0)" title=":-1:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -60px no-repeat;background-size:540px 140px;" alt=":-1:"><span class="label">:-1:</span></a><a href="javascript:void(0)" title=":ok_hand:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -60px no-repeat;background-size:540px 140px;" alt=":ok_hand:"><span class="label">:ok_hand:</span></a><a href="javascript:void(0)" title=":facepunch:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -80px no-repeat;background-size:540px 140px;" alt=":facepunch:"><span class="label">:facepunch:</span></a><a href="javascript:void(0)" title=":fist:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -80px no-repeat;background-size:540px 140px;" alt=":fist:"><span class="label">:fist:</span></a><a href="javascript:void(0)" title=":v:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -80px no-repeat;background-size:540px 140px;" alt=":v:"><span class="label">:v:</span></a><a href="javascript:void(0)" title=":wave:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -80px no-repeat;background-size:540px 140px;" alt=":wave:"><span class="label">:wave:</span></a><a href="javascript:void(0)" title=":hand:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -80px no-repeat;background-size:540px 140px;" alt=":hand:"><span class="label">:hand:</span></a><a href="javascript:void(0)" title=":open_hands:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -80px no-repeat;background-size:540px 140px;" alt=":open_hands:"><span class="label">:open_hands:</span></a><a href="javascript:void(0)" title=":point_up_2:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -80px no-repeat;background-size:540px 140px;" alt=":point_up_2:"><span class="label">:point_up_2:</span></a><a href="javascript:void(0)" title=":point_down:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -80px no-repeat;background-size:540px 140px;" alt=":point_down:"><span class="label">:point_down:</span></a><a href="javascript:void(0)" title=":point_right:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -80px no-repeat;background-size:540px 140px;" alt=":point_right:"><span class="label">:point_right:</span></a><a href="javascript:void(0)" title=":point_left:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -80px no-repeat;background-size:540px 140px;" alt=":point_left:"><span class="label">:point_left:</span></a><a href="javascript:void(0)" title=":raised_hands:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -80px no-repeat;background-size:540px 140px;" alt=":raised_hands:"><span class="label">:raised_hands:</span></a><a href="javascript:void(0)" title=":pray:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -80px no-repeat;background-size:540px 140px;" alt=":pray:"><span class="label">:pray:</span></a><a href="javascript:void(0)" title=":point_up:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -80px no-repeat;background-size:540px 140px;" alt=":point_up:"><span class="label">:point_up:</span></a><a href="javascript:void(0)" title=":clap:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -80px no-repeat;background-size:540px 140px;" alt=":clap:"><span class="label">:clap:</span></a><a href="javascript:void(0)" title=":muscle:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -80px no-repeat;background-size:540px 140px;" alt=":muscle:"><span class="label">:muscle:</span></a><a href="javascript:void(0)" title=":walking:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -80px no-repeat;background-size:540px 140px;" alt=":walking:"><span class="label">:walking:</span></a><a href="javascript:void(0)" title=":runner:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -80px no-repeat;background-size:540px 140px;" alt=":runner:"><span class="label">:runner:</span></a><a href="javascript:void(0)" title=":dancer:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -80px no-repeat;background-size:540px 140px;" alt=":dancer:"><span class="label">:dancer:</span></a><a href="javascript:void(0)" title=":couple:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -80px no-repeat;background-size:540px 140px;" alt=":couple:"><span class="label">:couple:</span></a><a href="javascript:void(0)" title=":family:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -80px no-repeat;background-size:540px 140px;" alt=":family:"><span class="label">:family:</span></a><a href="javascript:void(0)" title=":two_men_holding_hands:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -80px no-repeat;background-size:540px 140px;" alt=":two_men_holding_hands:"><span class="label">:two_men_holding_hands:</span></a><a href="javascript:void(0)" title=":two_women_holding_hands:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -80px no-repeat;background-size:540px 140px;" alt=":two_women_holding_hands:"><span class="label">:two_women_holding_hands:</span></a><a href="javascript:void(0)" title=":couplekiss:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -80px no-repeat;background-size:540px 140px;" alt=":couplekiss:"><span class="label">:couplekiss:</span></a><a href="javascript:void(0)" title=":couple_with_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -80px no-repeat;background-size:540px 140px;" alt=":couple_with_heart:"><span class="label">:couple_with_heart:</span></a><a href="javascript:void(0)" title=":dancers:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -80px no-repeat;background-size:540px 140px;" alt=":dancers:"><span class="label">:dancers:</span></a><a href="javascript:void(0)" title=":ok_woman:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -80px no-repeat;background-size:540px 140px;" alt=":ok_woman:"><span class="label">:ok_woman:</span></a><a href="javascript:void(0)" title=":no_good:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -80px no-repeat;background-size:540px 140px;" alt=":no_good:"><span class="label">:no_good:</span></a><a href="javascript:void(0)" title=":information_desk_person:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -100px no-repeat;background-size:540px 140px;" alt=":information_desk_person:"><span class="label">:information_desk_person:</span></a><a href="javascript:void(0)" title=":raising_hand:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -100px no-repeat;background-size:540px 140px;" alt=":raising_hand:"><span class="label">:raising_hand:</span></a><a href="javascript:void(0)" title=":massage:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -100px no-repeat;background-size:540px 140px;" alt=":massage:"><span class="label">:massage:</span></a><a href="javascript:void(0)" title=":haircut:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -100px no-repeat;background-size:540px 140px;" alt=":haircut:"><span class="label">:haircut:</span></a><a href="javascript:void(0)" title=":nail_care:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -100px no-repeat;background-size:540px 140px;" alt=":nail_care:"><span class="label">:nail_care:</span></a><a href="javascript:void(0)" title=":bride_with_veil:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -100px no-repeat;background-size:540px 140px;" alt=":bride_with_veil:"><span class="label">:bride_with_veil:</span></a><a href="javascript:void(0)" title=":person_with_pouting_face:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -100px no-repeat;background-size:540px 140px;" alt=":person_with_pouting_face:"><span class="label">:person_with_pouting_face:</span></a><a href="javascript:void(0)" title=":person_frowning:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -100px no-repeat;background-size:540px 140px;" alt=":person_frowning:"><span class="label">:person_frowning:</span></a><a href="javascript:void(0)" title=":bow:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -100px no-repeat;background-size:540px 140px;" alt=":bow:"><span class="label">:bow:</span></a><a href="javascript:void(0)" title=":tophat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -100px no-repeat;background-size:540px 140px;" alt=":tophat:"><span class="label">:tophat:</span></a><a href="javascript:void(0)" title=":crown:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -100px no-repeat;background-size:540px 140px;" alt=":crown:"><span class="label">:crown:</span></a><a href="javascript:void(0)" title=":womans_hat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -100px no-repeat;background-size:540px 140px;" alt=":womans_hat:"><span class="label">:womans_hat:</span></a><a href="javascript:void(0)" title=":athletic_shoe:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -100px no-repeat;background-size:540px 140px;" alt=":athletic_shoe:"><span class="label">:athletic_shoe:</span></a><a href="javascript:void(0)" title=":mans_shoe:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -100px no-repeat;background-size:540px 140px;" alt=":mans_shoe:"><span class="label">:mans_shoe:</span></a><a href="javascript:void(0)" title=":sandal:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -100px no-repeat;background-size:540px 140px;" alt=":sandal:"><span class="label">:sandal:</span></a><a href="javascript:void(0)" title=":high_heel:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -100px no-repeat;background-size:540px 140px;" alt=":high_heel:"><span class="label">:high_heel:</span></a><a href="javascript:void(0)" title=":boot:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -100px no-repeat;background-size:540px 140px;" alt=":boot:"><span class="label">:boot:</span></a><a href="javascript:void(0)" title=":shirt:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -100px no-repeat;background-size:540px 140px;" alt=":shirt:"><span class="label">:shirt:</span></a><a href="javascript:void(0)" title=":necktie:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -100px no-repeat;background-size:540px 140px;" alt=":necktie:"><span class="label">:necktie:</span></a><a href="javascript:void(0)" title=":womans_clothes:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -100px no-repeat;background-size:540px 140px;" alt=":womans_clothes:"><span class="label">:womans_clothes:</span></a><a href="javascript:void(0)" title=":dress:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -100px no-repeat;background-size:540px 140px;" alt=":dress:"><span class="label">:dress:</span></a><a href="javascript:void(0)" title=":running_shirt_with_sash:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -100px no-repeat;background-size:540px 140px;" alt=":running_shirt_with_sash:"><span class="label">:running_shirt_with_sash:</span></a><a href="javascript:void(0)" title=":jeans:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -100px no-repeat;background-size:540px 140px;" alt=":jeans:"><span class="label">:jeans:</span></a><a href="javascript:void(0)" title=":kimono:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -100px no-repeat;background-size:540px 140px;" alt=":kimono:"><span class="label">:kimono:</span></a><a href="javascript:void(0)" title=":bikini:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -100px no-repeat;background-size:540px 140px;" alt=":bikini:"><span class="label">:bikini:</span></a><a href="javascript:void(0)" title=":briefcase:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -100px no-repeat;background-size:540px 140px;" alt=":briefcase:"><span class="label">:briefcase:</span></a><a href="javascript:void(0)" title=":handbag:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -100px no-repeat;background-size:540px 140px;" alt=":handbag:"><span class="label">:handbag:</span></a><a href="javascript:void(0)" title=":pouch:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') 0px -120px no-repeat;background-size:540px 140px;" alt=":pouch:"><span class="label">:pouch:</span></a><a href="javascript:void(0)" title=":purse:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -20px -120px no-repeat;background-size:540px 140px;" alt=":purse:"><span class="label">:purse:</span></a><a href="javascript:void(0)" title=":eyeglasses:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -40px -120px no-repeat;background-size:540px 140px;" alt=":eyeglasses:"><span class="label">:eyeglasses:</span></a><a href="javascript:void(0)" title=":ribbon:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -60px -120px no-repeat;background-size:540px 140px;" alt=":ribbon:"><span class="label">:ribbon:</span></a><a href="javascript:void(0)" title=":closed_umbrella:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -80px -120px no-repeat;background-size:540px 140px;" alt=":closed_umbrella:"><span class="label">:closed_umbrella:</span></a><a href="javascript:void(0)" title=":lipstick:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -100px -120px no-repeat;background-size:540px 140px;" alt=":lipstick:"><span class="label">:lipstick:</span></a><a href="javascript:void(0)" title=":yellow_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -120px -120px no-repeat;background-size:540px 140px;" alt=":yellow_heart:"><span class="label">:yellow_heart:</span></a><a href="javascript:void(0)" title=":blue_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -140px -120px no-repeat;background-size:540px 140px;" alt=":blue_heart:"><span class="label">:blue_heart:</span></a><a href="javascript:void(0)" title=":purple_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -160px -120px no-repeat;background-size:540px 140px;" alt=":purple_heart:"><span class="label">:purple_heart:</span></a><a href="javascript:void(0)" title=":green_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -180px -120px no-repeat;background-size:540px 140px;" alt=":green_heart:"><span class="label">:green_heart:</span></a><a href="javascript:void(0)" title=":heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -200px -120px no-repeat;background-size:540px 140px;" alt=":heart:"><span class="label">:heart:</span></a><a href="javascript:void(0)" title=":broken_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -220px -120px no-repeat;background-size:540px 140px;" alt=":broken_heart:"><span class="label">:broken_heart:</span></a><a href="javascript:void(0)" title=":heartpulse:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -240px -120px no-repeat;background-size:540px 140px;" alt=":heartpulse:"><span class="label">:heartpulse:</span></a><a href="javascript:void(0)" title=":heartbeat:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -260px -120px no-repeat;background-size:540px 140px;" alt=":heartbeat:"><span class="label">:heartbeat:</span></a><a href="javascript:void(0)" title=":two_hearts:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -280px -120px no-repeat;background-size:540px 140px;" alt=":two_hearts:"><span class="label">:two_hearts:</span></a><a href="javascript:void(0)" title=":sparkling_heart:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -300px -120px no-repeat;background-size:540px 140px;" alt=":sparkling_heart:"><span class="label">:sparkling_heart:</span></a><a href="javascript:void(0)" title=":revolving_hearts:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -320px -120px no-repeat;background-size:540px 140px;" alt=":revolving_hearts:"><span class="label">:revolving_hearts:</span></a><a href="javascript:void(0)" title=":cupid:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -340px -120px no-repeat;background-size:540px 140px;" alt=":cupid:"><span class="label">:cupid:</span></a><a href="javascript:void(0)" title=":love_letter:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -360px -120px no-repeat;background-size:540px 140px;" alt=":love_letter:"><span class="label">:love_letter:</span></a><a href="javascript:void(0)" title=":kiss:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -380px -120px no-repeat;background-size:540px 140px;" alt=":kiss:"><span class="label">:kiss:</span></a><a href="javascript:void(0)" title=":ring:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -400px -120px no-repeat;background-size:540px 140px;" alt=":ring:"><span class="label">:ring:</span></a><a href="javascript:void(0)" title=":gem:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -420px -120px no-repeat;background-size:540px 140px;" alt=":gem:"><span class="label">:gem:</span></a><a href="javascript:void(0)" title=":bust_in_silhouette:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -440px -120px no-repeat;background-size:540px 140px;" alt=":bust_in_silhouette:"><span class="label">:bust_in_silhouette:</span></a><a href="javascript:void(0)" title=":busts_in_silhouette:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -460px -120px no-repeat;background-size:540px 140px;" alt=":busts_in_silhouette:"><span class="label">:busts_in_silhouette:</span></a><a href="javascript:void(0)" title=":speech_balloon:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -480px -120px no-repeat;background-size:540px 140px;" alt=":speech_balloon:"><span class="label">:speech_balloon:</span></a><a href="javascript:void(0)" title=":footprints:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -500px -120px no-repeat;background-size:540px 140px;" alt=":footprints:"><span class="label">:footprints:</span></a><a href="javascript:void(0)" title=":thought_balloon:"><img src="img/blank.gif" class="img" style="display:inline-block;width:20px;height:20px;background:url('img/emojisprite_0.png') -520px -120px no-repeat;background-size:540px 140px;" alt=":thought_balloon:"><span class="label">:thought_balloon:</span></a></div><div class="nano-pane" style="display: block;"><div class="nano-slider" style="height: 37px; transform: translate(0px, 0px);"></div></div></div></div></div>
    //$templateCache.put('template/emoji-picker/button-bootstrap.html',
    //  '<i class="emoji-picker emoji-smile" tooltip-html-unsafe="{{ content }}"' +
    //  'tooltip-placement="{{ !placement && \'left\' || placement }}" tooltip-trigger="click"></i>'
    //);
    //'<i class=\"emoji-picker emoji-{{ emoji }}\" ng-repeat=\"emoji in groups\" ng-click=\"append(emoji)\"></i>'+


    //$templateCache.put('template/smilies/popover-a.html',
    //  '<div ng-model="smilies" class="smilies-selector-content">'+
    //  '<i class="smiley-{{smiley}}" ng-repeat="smiley in smilies" ng-click="append(smiley)"></i>'+
    //  '</div>'
    //);
    $templateCache.put('template/emoji-picker/button-strap.html',
      '<i class="emoji-picker emoji-smile" bs-popover '+
      'data-template="template/emoji-picker/popover-strap.html" '+
      'data-placement="{{ !placement && \'left\' || placement }}" '+
      'title="{{ title }}"></i>'
    );

    $templateCache.put('template/emoji-picker/popover-strap.html',
      '<div class="popover" tabindex="-1">' +
        '<div class="arrow"></div>' +
        '<h3 class="popover-title" ng-bind-html="title" ng-show="title"></h3>' +
        '<div class="popover-content">' +
          '<div class="emoji-container">' +
            '<div class="emoji-groups">' +
              '<i class="emoji-group {{ ::group.icon.name }}"' +
              ' ng-class="(group.icon.selected === selectedGroup.icon.selected) ? selectedGroup.icon.selected : \'\'"' +
              ' ng-repeat="group in ::groups" ng-click="changeGroup(group)"></i>' +
              '<div class="pull-right close-button-holder">' +
                '<button type="button" class="close" ng-click="$hide()">&times;</button>' +
              '</div>' +
            '</div>' +
            '<i class="emoji-picker emoji-{{ ::toClassName(emoji) }}" ng-repeat="emoji in selectedGroup.emoji" ng-click="append(emoji)"></i>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }
]);

angular.module('vkEmojiPicker').constant('EmojiGroups', (function () {
  var faces = ["bowtie", "smile", "laughing", "blush", "smiley", "relaxed",
    "smirk", "heart_eyes", "kissing_heart", "kissing_closed_eyes", "flushed",
    "relieved", "satisfied", "grin", "wink", "stuck_out_tongue_winking_eye",
    "stuck_out_tongue_closed_eyes", "grinning", "kissing", "winky_face",
    "kissing_smiling_eyes", "stuck_out_tongue", "sleeping", "worried",
    "frowning", "anguished", "open_mouth", "grimacing", "confused", "hushed",
    "expressionless", "unamused", "sweat_smile", "sweat", "wow",
    "disappointed_relieved", "weary", "pensive", "disappointed", "confounded",
    "fearful", "cold_sweat", "persevere", "cry", "sob", "joy", "astonished",
    "scream", "neckbeard", "tired_face", "angry", "rage", "triumph", "sleepy",
    "yum", "mask", "sunglasses", "dizzy_face", "imp", "smiling_imp",
    "neutral_face", "no_mouth", "innocent", "alien", "yellow_heart",
    "blue_heart", "purple_heart", "heart", "green_heart", "broken_heart",
    "heartbeat", "heartpulse", "two_hearts", "revolving_hearts", "cupid",
    "sparkling_heart", "sparkles", "star", "star2", "dizzy", "boom",
    "collision", "anger", "exclamation", "question", "grey_exclamation",
    "grey_question", "zzz", "dash", "sweat_drops", "notes", "musical_note",
    "fire", "hankey", "poop", "shit", "\\+1", "thumbsup", "-1", "thumbsdown",
    "ok_hand", "punch", "facepunch", "fist", "v", "wave", "hand", "raised_hand",
    "open_hands", "point_up", "point_down", "point_left", "point_right",
    "raised_hands", "pray", "point_up_2", "clap", "muscle", "metal", "fu",
    "walking", "runner", "running", "couple", "family", "two_men_holding_hands",
    "two_women_holding_hands", "dancer", "dancers", "ok_woman", "no_good",
    "information_desk_person", "raising_hand", "bride_with_veil",
    "person_with_pouting_face", "person_frowning", "bow", "couplekiss",
    "couple_with_heart", "massage", "haircut", "nail_care", "boy", "girl",
    "woman", "man", "baby", "older_woman", "older_man",
    "person_with_blond_hair", "man_with_gua_pi_mao", "man_with_turban",
    "construction_worker", "cop", "angel", "princess", "smiley_cat",
    "smile_cat", "heart_eyes_cat", "kissing_cat", "smirk_cat", "scream_cat",
    "crying_cat_face", "joy_cat", "pouting_cat", "japanese_ogre",
    "japanese_goblin", "see_no_evil", "hear_no_evil", "speak_no_evil",
    "guardsman", "skull", "feet", "lips", "kiss", "droplet", "ear", "eyes",
    "nose", "tongue", "love_letter", "bust_in_silhouette",
    "busts_in_silhouette", "speech_balloon", "thought_balloon", "feelsgood",
    "finnadie", "goberserk", "godmode", "hurtrealbad", "rage1", "rage2",
    "rage3", "rage4", "suspect", "trollface"];

  var nature = ["sunny", "umbrella", "cloud",
    "snowflake", "snowman", "zap", "cyclone", "foggy", "ocean", "cat", "dog",
    "mouse", "hamster", "rabbit", "wolf", "frog", "tiger", "koala", "bear",
    "pig", "pig_nose", "cow", "boar", "monkey_face", "monkey", "horse",
    "racehorse", "camel", "sheep", "elephant", "panda_face", "snake", "bird",
    "baby_chick", "hatched_chick", "hatching_chick", "chicken", "penguin",
    "turtle", "bug", "honeybee", "ant", "beetle", "snail", "octopus",
    "tropical_fish", "fish", "whale", "whale2", "dolphin", "cow2", "ram", "rat",
    "water_buffalo", "tiger2", "rabbit2", "dragon", "goat", "rooster", "dog2",
    "pig2", "mouse2", "ox", "dragon_face", "blowfish", "crocodile",
    "dromedary_camel", "leopard", "cat2", "poodle", "paw_prints", "bouquet",
    "cherry_blossom", "tulip", "four_leaf_clover", "rose", "sunflower",
    "hibiscus", "maple_leaf", "leaves", "fallen_leaf", "herb", "mushroom",
    "cactus", "palm_tree", "evergreen_tree", "deciduous_tree", "chestnut",
    "seedling", "blossom", "ear_of_rice", "shell", "globe_with_meridians",
    "sun_with_face", "full_moon_with_face", "new_moon_with_face", "new_moon",
    "waxing_crescent_moon", "first_quarter_moon", "waxing_gibbous_moon",
    "full_moon", "waning_gibbous_moon", "last_quarter_moon",
    "waning_crescent_moon", "last_quarter_moon_with_face",
    "first_quarter_moon_with_face", "moon", "earth_africa", "earth_americas",
    "earth_asia", "volcano", "milky_way", "partly_sunny", "octocat", "squirrel"];

  var life = ["bamboo", "gift_heart", "dolls", "school_satchel", "mortar_board", "flags",
    "fireworks", "sparkler", "wind_chime", "rice_scene", "jack_o_lantern",
    "ghost", "santa", "christmas_tree", "gift", "bell", "no_bell",
    "tanabata_tree", "tada", "confetti_ball", "balloon", "crystal_ball", "cd",
    "dvd", "floppy_disk", "camera", "video_camera", "movie_camera", "computer",
    "tv", "iphone", "phone", "telephone", "telephone_receiver", "pager", "fax",
    "minidisc", "vhs", "sound", "speaker", "mute", "loudspeaker", "mega",
    "hourglass", "hourglass_flowing_sand", "alarm_clock", "watch", "radio",
    "satellite", "loop", "mag", "mag_right", "unlock", "lock",
    "lock_with_ink_pen", "closed_lock_with_key", "key", "bulb", "flashlight",
    "high_brightness", "low_brightness", "electric_plug", "battery", "calling",
    "email", "mailbox", "postbox", "bath", "bathtub", "shower", "toilet",
    "wrench", "nut_and_bolt", "hammer", "seat", "moneybag", "yen", "dollar",
    "pound", "euro", "credit_card", "money_with_wings", "e-mail", "inbox_tray",
    "outbox_tray", "envelope", "incoming_envelope", "postal_horn",
    "mailbox_closed", "mailbox_with_mail", "mailbox_with_no_mail", "door",
    "smoking", "bomb", "gun", "hocho", "pill", "syringe", "page_facing_up",
    "page_with_curl", "bookmark_tabs", "bar_chart", "chart_with_upwards_trend",
    "chart_with_downwards_trend", "scroll", "clipboard", "calendar", "date",
    "card_index", "file_folder", "open_file_folder", "scissors", "pushpin",
    "paperclip", "black_nib", "pencil2", "straight_ruler", "triangular_ruler",
    "closed_book", "green_book", "blue_book", "orange_book", "notebook",
    "notebook_with_decorative_cover", "ledger", "books", "bookmark",
    "name_badge", "microscope", "telescope", "newspaper", "football",
    "basketball", "soccer", "baseball", "tennis", "8ball", "rugby_football",
    "bowling", "golf", "mountain_bicyclist", "bicyclist", "horse_racing",
    "snowboarder", "swimmer", "surfer", "ski", "spades", "hearts", "clubs",
    "diamonds", "gem", "ring", "trophy", "musical_score", "musical_keyboard",
    "violin", "space_invader", "video_game", "black_joker",
    "flower_playing_cards", "game_die", "dart", "mahjong", "clapper", "memo",
    "pencil", "book", "art", "microphone", "headphones", "trumpet", "saxophone",
    "guitar", "shoe", "sandal", "high_heel", "lipstick", "boot", "shirt",
    "tshirt", "necktie", "womans_clothes", "dress", "running_shirt_with_sash",
    "jeans", "kimono", "bikini", "ribbon", "tophat", "crown", "womans_hat",
    "mans_shoe", "closed_umbrella", "briefcase", "handbag", "pouch", "purse",
    "eyeglasses", "fishing_pole_and_fish", "coffee", "tea", "sake",
    "baby_bottle", "beer", "beers", "cocktail", "tropical_drink", "wine_glass",
    "fork_and_knife", "pizza", "hamburger", "fries", "poultry_leg",
    "meat_on_bone", "spaghetti", "curry", "fried_shrimp", "bento", "sushi",
    "fish_cake", "rice_ball", "rice_cracker", "rice", "ramen", "stew", "oden",
    "dango", "egg", "bread", "doughnut", "custard", "icecream", "ice_cream",
    "shaved_ice", "birthday", "cake", "cookie", "chocolate_bar", "candy",
    "lollipop", "honey_pot", "apple", "green_apple", "tangerine", "lemon",
    "cherries", "grapes", "watermelon", "strawberry", "peach", "melon",
    "banana", "pear", "pineapple", "sweet_potato", "eggplant", "tomato", "corn"];

  var travel = ["house", "house_with_garden", "school", "office", "post_office", "hospital",
    "bank", "convenience_store", "love_hotel", "hotel", "wedding", "church",
    "department_store", "european_post_office", "city_sunrise", "city_sunset",
    "japanese_castle", "european_castle", "tent", "factory", "tokyo_tower",
    "japan", "mount_fuji", "sunrise_over_mountains", "sunrise", "stars",
    "themoreyouknow", "tmyk", "statue_of_liberty", "bridge_at_night", "carousel_horse", "rainbow",
    "ferris_wheel", "fountain", "roller_coaster", "ship", "speedboat", "boat",
    "sailboat", "rowboat", "anchor", "rocket", "airplane", "helicopter",
    "steam_locomotive", "tram", "mountain_railway", "bike", "aerial_tramway",
    "suspension_railway", "mountain_cableway", "tractor", "blue_car",
    "oncoming_automobile", "car", "red_car", "taxi", "oncoming_taxi",
    "articulated_lorry", "bus", "oncoming_bus", "rotating_light", "police_car",
    "oncoming_police_car", "fire_engine", "ambulance", "minibus", "truck",
    "train", "station", "train2", "bullettrain_front", "bullettrain_side",
    "light_rail", "monorail", "railway_car", "trolleybus", "ticket", "fuelpump",
    "vertical_traffic_light", "traffic_light", "warning", "construction",
    "beginner", "atm", "slot_machine", "busstop", "barber", "hotsprings",
    "checkered_flag", "crossed_flags", "izakaya_lantern", "moyai",
    "circus_tent", "performing_arts", "round_pushpin",
    "triangular_flag_on_post", "jp", "kr", "cn", "us", "fr", "es", "it", "ru", "gb", "uk", "de"];

  var signs = ["one", "two", "three", "four", "five", "six", "seven",
    "eight", "nine", "keycap_ten", "1234", "zero", "hash", "symbols",
    "arrow_backward", "arrow_down", "arrow_forward", "arrow_left",
    "capital_abcd", "abcd", "abc", "arrow_lower_left", "arrow_lower_right",
    "arrow_right", "arrow_up", "arrow_upper_left", "arrow_upper_right",
    "arrow_double_down", "arrow_double_up", "arrow_down_small",
    "arrow_heading_down", "arrow_heading_up", "leftwards_arrow_with_hook",
    "arrow_right_hook", "left_right_arrow", "arrow_up_down", "arrow_up_small",
    "arrows_clockwise", "arrows_counterclockwise", "rewind", "fast_forward",
    "information_source", "ok", "twisted_rightwards_arrows", "repeat",
    "repeat_one", "new", "top", "up", "cool", "free", "ng", "cinema", "koko",
    "signal_strength", "u5272", "u5408", "u55b6", "u6307", "u6708", "u6709",
    "u6e80", "u7121", "u7533", "u7a7a", "u7981", "sa", "restroom", "mens",
    "womens", "baby_symbol", "no_smoking", "parking", "wheelchair", "metro",
    "baggage_claim", "accept", "wc", "potable_water", "put_litter_in_its_place",
    "secret", "congratulations", "m", "passport_control", "left_luggage",
    "customs", "ideograph_advantage", "cl", "sos", "id", "no_entry_sign",
    "underage", "no_mobile_phones", "do_not_litter", "non-potable_water",
    "no_bicycles", "no_pedestrians", "children_crossing", "no_entry",
    "eight_spoked_asterisk", "eight_pointed_black_star", "heart_decoration",
    "vs", "vibration_mode", "mobile_phone_off", "chart", "currency_exchange",
    "aries", "taurus", "gemini", "cancer", "leo", "virgo", "libra", "scorpius",
    "sagittarius", "capricorn", "aquarius", "pisces", "ophiuchus",
    "six_pointed_star", "negative_squared_cross_mark", "a", "b", "ab", "o2",
    "diamond_shape_with_a_dot_inside", "recycle", "end", "on", "soon", "clock1",
    "clock130", "clock10", "clock1030", "clock11", "clock1130", "clock12",
    "clock1230", "clock2", "clock230", "clock3", "clock330", "clock4",
    "clock430", "clock5", "clock530", "clock6", "clock630", "clock7",
    "clock730", "clock8", "clock830", "clock9", "clock930", "heavy_dollar_sign",
    "copyright", "registered", "tm", "x", "heavy_exclamation_mark", "bangbang",
    "interrobang", "o", "heavy_multiplication_x", "heavy_plus_sign",
    "heavy_minus_sign", "heavy_division_sign", "white_flower", "100",
    "heavy_check_mark", "ballot_box_with_check", "radio_button", "link",
    "curly_loop", "wavy_dash", "part_alternation_mark", "trident",
    "black_square", "white_square", "white_check_mark", "black_square_button",
    "white_square_button", "black_circle", "white_circle", "red_circle",
    "large_blue_circle", "large_blue_diamond", "large_orange_diamond",
    "small_blue_diamond", "small_orange_diamond", "small_red_triangle",
    "small_red_triangle_down", "shipit"];

  var all = faces.concat(nature, life, travel, signs);

  return {
    groups: [
      {
        name: 'recent',
        icon: {
          name: 'icon-recent',
          selected: 'icon-recent-selected'
        },
        emoji: []
      }, {
        name: 'smile',
        icon: {
          name: 'icon-smile',
          selected: 'icon-smile-selected'
        },
        emoji: faces
      }, {
        name: 'flower',
        icon: {
          name: 'icon-flower',
          selected: 'icon-flower-selected'
        },
        emoji: nature
      }, {
        name: 'bell',
        icon: {
          name: 'icon-bell',
          selected: 'icon-bell-selected'
        },
        emoji: life
      }, {
        name: 'car',
        icon: {
          name: 'icon-car',
          selected: 'icon-car-selected'
        },
        emoji: travel
      }, {
        name: 'grid',
        icon: {
          name: 'icon-grid',
          selected: 'icon-grid-selected'
        },
        emoji: signs
      }
    ],
    all: all
  };
})());

angular.module('vkEmojiPicker').constant('EmojiHex', (function () {
  var codes = {
    "copyright":"00a9",
    "registered":"00ae",
    "bangbang":"203c",
    "interrobang":"2049",
    "tm":"2122",
    "information_source":"2139",
    "left_right_arrow":"2194",
    "arrow_up_down":"2195",
    "arrow_upper_left":"2196",
    "arrow_upper_right":"2197",
    "arrow_lower_right":"2198",
    "arrow_lower_left":"2199",
    "leftwards_arrow_with_hook":"21a9",
    "arrow_right_hook":"21aa",
    "watch":"231a",
    "hourglass":"231b",
    "fast_forward":"23e9",
    "rewind":"23ea",
    "arrow_double_up":"23eb",
    "arrow_double_down":"23ec",
    "alarm_clock":"23f0",
    "hourglass_flowing_sand":"23f3",
    "m":"24c2",
    "black_small_square":"25aa",
    "white_small_square":"25ab",
    "arrow_forward":"25b6",
    "arrow_backward":"25c0",
    "white_medium_square":"25fb",
    "black_medium_square":"25fc",
    "white_medium_small_square":"25fd",
    "black_medium_small_square":"25fe",
    "sunny":"2600",
    "cloud":"2601",
    "phone":"260e",
    "telephone":"260e",
    "ballot_box_with_check":"2611",
    "umbrella":"2614",
    "coffee":"2615",
    "point_up":"261d",
    "relaxed":"263a",
    "aries":"2648",
    "taurus":"2649",
    "gemini":"264a",
    "cancer":"264b",
    "leo":"264c",
    "virgo":"264d",
    "libra":"264e",
    "scorpius":"264f",
    "sagittarius":"2650",
    "capricorn":"2651",
    "aquarius":"2652",
    "pisces":"2653",
    "spades":"2660",
    "clubs":"2663",
    "hearts":"2665",
    "diamonds":"2666",
    "hotsprings":"2668",
    "recycle":"267b",
    "wheelchair":"267f",
    "anchor":"2693",
    "warning":"26a0",
    "zap":"26a1",
    "white_circle":"26aa",
    "black_circle":"26ab",
    "soccer":"26bd",
    "baseball":"26be",
    "snowman":"26c4",
    "partly_sunny":"26c5",
    "ophiuchus":"26ce",
    "no_entry":"26d4",
    "church":"26ea",
    "fountain":"26f2",
    "golf":"26f3",
    "boat":"26f5",
    "sailboat":"26f5",
    "tent":"26fa",
    "fuelpump":"26fd",
    "scissors":"2702",
    "white_check_mark":"2705",
    "airplane":"2708",
    "email":"2709",
    "envelope":"2709",
    "fist":"270a",
    "hand":"270b",
    "raised_hand":"270b",
    "v":"270c",
    "pencil2":"270f",
    "black_nib":"2712",
    "heavy_check_mark":"2714",
    "heavy_multiplication_x":"2716",
    "sparkles":"2728",
    "eight_spoked_asterisk":"2733",
    "eight_pointed_black_star":"2734",
    "snowflake":"2744",
    "sparkle":"2747",
    "x":"274c",
    "negative_squared_cross_mark":"274e",
    "question":"2753",
    "grey_question":"2754",
    "grey_exclamation":"2755",
    "exclamation":"2757",
    "heavy_exclamation_mark":"2757",
    "heart":"2764",
    "heavy_plus_sign":"2795",
    "heavy_minus_sign":"2796",
    "heavy_division_sign":"2797",
    "arrow_right":"27a1",
    "curly_loop":"27b0",
    "loop":"27bf",
    "arrow_heading_up":"2934",
    "arrow_heading_down":"2935",
    "arrow_left":"2b05",
    "arrow_up":"2b06",
    "arrow_down":"2b07",
    "black_large_square":"2b1b",
    "white_large_square":"2b1c",
    "star":"2b50",
    "o":"2b55",
    "wavy_dash":"3030",
    "part_alternation_mark":"303d",
    "congratulations":"3297",
    "secret":"3299",
    "mahjong":"1f004",
    "black_joker":"1f0cf",
    "a":"1f170",
    "b":"1f171",
    "o2":"1f17e",
    "parking":"1f17f",
    "ab":"1f18e",
    "cl":"1f191",
    "cool":"1f192",
    "free":"1f193",
    "id":"1f194",
    "new":"1f195",
    "ng":"1f196",
    "ok":"1f197",
    "sos":"1f198",
    "up":"1f199",
    "vs":"1f19a",
    "koko":"1f201",
    "sa":"1f202",
    "u7121":"1f21a",
    "u6307":"1f22f",
    "u7981":"1f232",
    "u7a7a":"1f233",
    "u5408":"1f234",
    "u6e80":"1f235",
    "u6709":"1f236",
    "u6708":"1f237",
    "u7533":"1f238",
    "u5272":"1f239",
    "u55b6":"1f23a",
    "ideograph_advantage":"1f250",
    "accept":"1f251",
    "cyclone":"1f300",
    "foggy":"1f301",
    "closed_umbrella":"1f302",
    "night_with_stars":"1f303",
    "sunrise_over_mountains":"1f304",
    "sunrise":"1f305",
    "city_sunset":"1f306",
    "city_sunrise":"1f307",
    "rainbow":"1f308",
    "bridge_at_night":"1f309",
    "ocean":"1f30a",
    "volcano":"1f30b",
    "milky_way":"1f30c",
    "earth_africa":"1f30d",
    "earth_americas":"1f30e",
    "earth_asia":"1f30f",
    "globe_with_meridians":"1f310",
    "new_moon":"1f311",
    "waxing_crescent_moon":"1f312",
    "first_quarter_moon":"1f313",
    "moon":"1f314",
    "waxing_gibbous_moon":"1f314",
    "full_moon":"1f315",
    "waning_gibbous_moon":"1f316",
    "last_quarter_moon":"1f317",
    "waning_crescent_moon":"1f318",
    "crescent_moon":"1f319",
    "new_moon_with_face":"1f31a",
    "first_quarter_moon_with_face":"1f31b",
    "last_quarter_moon_with_face":"1f31c",
    "full_moon_with_face":"1f31d",
    "sun_with_face":"1f31e",
    "star2":"1f31f",
    "stars":"1f320",
    "chestnut":"1f330",
    "seedling":"1f331",
    "evergreen_tree":"1f332",
    "deciduous_tree":"1f333",
    "palm_tree":"1f334",
    "cactus":"1f335",
    "tulip":"1f337",
    "cherry_blossom":"1f338",
    "rose":"1f339",
    "hibiscus":"1f33a",
    "sunflower":"1f33b",
    "blossom":"1f33c",
    "corn":"1f33d",
    "ear_of_rice":"1f33e",
    "herb":"1f33f",
    "four_leaf_clover":"1f340",
    "maple_leaf":"1f341",
    "fallen_leaf":"1f342",
    "leaves":"1f343",
    "mushroom":"1f344",
    "tomato":"1f345",
    "eggplant":"1f346",
    "grapes":"1f347",
    "melon":"1f348",
    "watermelon":"1f349",
    "tangerine":"1f34a",
    "lemon":"1f34b",
    "banana":"1f34c",
    "pineapple":"1f34d",
    "apple":"1f34e",
    "green_apple":"1f34f",
    "pear":"1f350",
    "peach":"1f351",
    "cherries":"1f352",
    "strawberry":"1f353",
    "hamburger":"1f354",
    "pizza":"1f355",
    "meat_on_bone":"1f356",
    "poultry_leg":"1f357",
    "rice_cracker":"1f358",
    "rice_ball":"1f359",
    "rice":"1f35a",
    "curry":"1f35b",
    "ramen":"1f35c",
    "spaghetti":"1f35d",
    "bread":"1f35e",
    "fries":"1f35f",
    "sweet_potato":"1f360",
    "dango":"1f361",
    "oden":"1f362",
    "sushi":"1f363",
    "fried_shrimp":"1f364",
    "fish_cake":"1f365",
    "icecream":"1f366",
    "shaved_ice":"1f367",
    "ice_cream":"1f368",
    "doughnut":"1f369",
    "cookie":"1f36a",
    "chocolate_bar":"1f36b",
    "candy":"1f36c",
    "lollipop":"1f36d",
    "custard":"1f36e",
    "honey_pot":"1f36f",
    "cake":"1f370",
    "bento":"1f371",
    "stew":"1f372",
    "egg":"1f373",
    "fork_and_knife":"1f374",
    "tea":"1f375",
    "sake":"1f376",
    "wine_glass":"1f377",
    "cocktail":"1f378",
    "tropical_drink":"1f379",
    "beer":"1f37a",
    "beers":"1f37b",
    "baby_bottle":"1f37c",
    "ribbon":"1f380",
    "gift":"1f381",
    "birthday":"1f382",
    "jack_o_lantern":"1f383",
    "christmas_tree":"1f384",
    "santa":"1f385",
    "fireworks":"1f386",
    "sparkler":"1f387",
    "balloon":"1f388",
    "tada":"1f389",
    "confetti_ball":"1f38a",
    "tanabata_tree":"1f38b",
    "crossed_flags":"1f38c",
    "bamboo":"1f38d",
    "dolls":"1f38e",
    "flags":"1f38f",
    "wind_chime":"1f390",
    "rice_scene":"1f391",
    "school_satchel":"1f392",
    "mortar_board":"1f393",
    "carousel_horse":"1f3a0",
    "ferris_wheel":"1f3a1",
    "roller_coaster":"1f3a2",
    "fishing_pole_and_fish":"1f3a3",
    "microphone":"1f3a4",
    "movie_camera":"1f3a5",
    "cinema":"1f3a6",
    "headphones":"1f3a7",
    "art":"1f3a8",
    "tophat":"1f3a9",
    "circus_tent":"1f3aa",
    "ticket":"1f3ab",
    "clapper":"1f3ac",
    "performing_arts":"1f3ad",
    "video_game":"1f3ae",
    "dart":"1f3af",
    "slot_machine":"1f3b0",
    "8ball":"1f3b1",
    "game_die":"1f3b2",
    "bowling":"1f3b3",
    "flower_playing_cards":"1f3b4",
    "musical_note":"1f3b5",
    "notes":"1f3b6",
    "saxophone":"1f3b7",
    "guitar":"1f3b8",
    "musical_keyboard":"1f3b9",
    "trumpet":"1f3ba",
    "violin":"1f3bb",
    "musical_score":"1f3bc",
    "running_shirt_with_sash":"1f3bd",
    "tennis":"1f3be",
    "ski":"1f3bf",
    "basketball":"1f3c0",
    "checkered_flag":"1f3c1",
    "snowboarder":"1f3c2",
    "runner":"1f3c3",
    "running":"1f3c3",
    "surfer":"1f3c4",
    "trophy":"1f3c6",
    "horse_racing":"1f3c7",
    "football":"1f3c8",
    "rugby_football":"1f3c9",
    "swimmer":"1f3ca",
    "house":"1f3e0",
    "house_with_garden":"1f3e1",
    "office":"1f3e2",
    "post_office":"1f3e3",
    "european_post_office":"1f3e4",
    "hospital":"1f3e5",
    "bank":"1f3e6",
    "atm":"1f3e7",
    "hotel":"1f3e8",
    "love_hotel":"1f3e9",
    "convenience_store":"1f3ea",
    "school":"1f3eb",
    "department_store":"1f3ec",
    "factory":"1f3ed",
    "izakaya_lantern":"1f3ee",
    "lantern":"1f3ee",
    "japanese_castle":"1f3ef",
    "european_castle":"1f3f0",
    "skin-tone-2":"1f3fb",
    "skin-tone-3":"1f3fc",
    "skin-tone-4":"1f3fd",
    "skin-tone-5":"1f3fe",
    "skin-tone-6":"1f3ff",
    "rat":"1f400",
    "mouse2":"1f401",
    "ox":"1f402",
    "water_buffalo":"1f403",
    "cow2":"1f404",
    "tiger2":"1f405",
    "leopard":"1f406",
    "rabbit2":"1f407",
    "cat2":"1f408",
    "dragon":"1f409",
    "crocodile":"1f40a",
    "whale2":"1f40b",
    "snail":"1f40c",
    "snake":"1f40d",
    "racehorse":"1f40e",
    "ram":"1f40f",
    "goat":"1f410",
    "sheep":"1f411",
    "monkey":"1f412",
    "rooster":"1f413",
    "chicken":"1f414",
    "dog2":"1f415",
    "pig2":"1f416",
    "boar":"1f417",
    "elephant":"1f418",
    "octopus":"1f419",
    "shell":"1f41a",
    "bug":"1f41b",
    "ant":"1f41c",
    "bee":"1f41d",
    "honeybee":"1f41d",
    "beetle":"1f41e",
    "fish":"1f41f",
    "tropical_fish":"1f420",
    "blowfish":"1f421",
    "turtle":"1f422",
    "hatching_chick":"1f423",
    "baby_chick":"1f424",
    "hatched_chick":"1f425",
    "bird":"1f426",
    "penguin":"1f427",
    "koala":"1f428",
    "poodle":"1f429",
    "dromedary_camel":"1f42a",
    "camel":"1f42b",
    "dolphin":"1f42c",
    "flipper":"1f42c",
    "mouse":"1f42d",
    "cow":"1f42e",
    "tiger":"1f42f",
    "rabbit":"1f430",
    "cat":"1f431",
    "dragon_face":"1f432",
    "whale":"1f433",
    "horse":"1f434",
    "monkey_face":"1f435",
    "dog":"1f436",
    "pig":"1f437",
    "frog":"1f438",
    "hamster":"1f439",
    "wolf":"1f43a",
    "bear":"1f43b",
    "panda_face":"1f43c",
    "pig_nose":"1f43d",
    "feet":"1f43e",
    "paw_prints":"1f43e",
    "eyes":"1f440",
    "ear":"1f442",
    "nose":"1f443",
    "lips":"1f444",
    "tongue":"1f445",
    "point_up_2":"1f446",
    "point_down":"1f447",
    "point_left":"1f448",
    "point_right":"1f449",
    "facepunch":"1f44a",
    "punch":"1f44a",
    "wave":"1f44b",
    "ok_hand":"1f44c",
    "+1":"1f44d",
    "thumbsup":"1f44d",
    "-1":"1f44e",
    "thumbsdown":"1f44e",
    "clap":"1f44f",
    "open_hands":"1f450",
    "crown":"1f451",
    "womans_hat":"1f452",
    "eyeglasses":"1f453",
    "necktie":"1f454",
    "shirt":"1f455",
    "tshirt":"1f455",
    "jeans":"1f456",
    "dress":"1f457",
    "kimono":"1f458",
    "bikini":"1f459",
    "womans_clothes":"1f45a",
    "purse":"1f45b",
    "handbag":"1f45c",
    "pouch":"1f45d",
    "mans_shoe":"1f45e",
    "shoe":"1f45e",
    "athletic_shoe":"1f45f",
    "high_heel":"1f460",
    "sandal":"1f461",
    "boot":"1f462",
    "footprints":"1f463",
    "bust_in_silhouette":"1f464",
    "busts_in_silhouette":"1f465",
    "boy":"1f466",
    "girl":"1f467",
    "man":"1f468",
    "woman":"1f469",
    "family":"1f46a",
    "couple":"1f46b",
    "two_men_holding_hands":"1f46c",
    "two_women_holding_hands":"1f46d",
    "cop":"1f46e",
    "dancers":"1f46f",
    "bride_with_veil":"1f470",
    "person_with_blond_hair":"1f471",
    "man_with_gua_pi_mao":"1f472",
    "man_with_turban":"1f473",
    "older_man":"1f474",
    "older_woman":"1f475",
    "baby":"1f476",
    "construction_worker":"1f477",
    "princess":"1f478",
    "japanese_ogre":"1f479",
    "japanese_goblin":"1f47a",
    "ghost":"1f47b",
    "angel":"1f47c",
    "alien":"1f47d",
    "space_invader":"1f47e",
    "imp":"1f47f",
    "skull":"1f480",
    "information_desk_person":"1f481",
    "guardsman":"1f482",
    "dancer":"1f483",
    "lipstick":"1f484",
    "nail_care":"1f485",
    "massage":"1f486",
    "haircut":"1f487",
    "barber":"1f488",
    "syringe":"1f489",
    "pill":"1f48a",
    "kiss":"1f48b",
    "love_letter":"1f48c",
    "ring":"1f48d",
    "gem":"1f48e",
    "couplekiss":"1f48f",
    "bouquet":"1f490",
    "couple_with_heart":"1f491",
    "wedding":"1f492",
    "heartbeat":"1f493",
    "broken_heart":"1f494",
    "two_hearts":"1f495",
    "sparkling_heart":"1f496",
    "heartpulse":"1f497",
    "cupid":"1f498",
    "blue_heart":"1f499",
    "green_heart":"1f49a",
    "yellow_heart":"1f49b",
    "purple_heart":"1f49c",
    "gift_heart":"1f49d",
    "revolving_hearts":"1f49e",
    "heart_decoration":"1f49f",
    "diamond_shape_with_a_dot_inside":"1f4a0",
    "bulb":"1f4a1",
    "anger":"1f4a2",
    "bomb":"1f4a3",
    "zzz":"1f4a4",
    "boom":"1f4a5",
    "collision":"1f4a5",
    "sweat_drops":"1f4a6",
    "droplet":"1f4a7",
    "dash":"1f4a8",
    "hankey":"1f4a9",
    "poop":"1f4a9",
    "shit":"1f4a9",
    "muscle":"1f4aa",
    "dizzy":"1f4ab",
    "speech_balloon":"1f4ac",
    "thought_balloon":"1f4ad",
    "white_flower":"1f4ae",
    "100":"1f4af",
    "moneybag":"1f4b0",
    "currency_exchange":"1f4b1",
    "heavy_dollar_sign":"1f4b2",
    "credit_card":"1f4b3",
    "yen":"1f4b4",
    "dollar":"1f4b5",
    "euro":"1f4b6",
    "pound":"1f4b7",
    "money_with_wings":"1f4b8",
    "chart":"1f4b9",
    "seat":"1f4ba",
    "computer":"1f4bb",
    "briefcase":"1f4bc",
    "minidisc":"1f4bd",
    "floppy_disk":"1f4be",
    "cd":"1f4bf",
    "dvd":"1f4c0",
    "file_folder":"1f4c1",
    "open_file_folder":"1f4c2",
    "page_with_curl":"1f4c3",
    "page_facing_up":"1f4c4",
    "date":"1f4c5",
    "calendar":"1f4c6",
    "card_index":"1f4c7",
    "chart_with_upwards_trend":"1f4c8",
    "chart_with_downwards_trend":"1f4c9",
    "bar_chart":"1f4ca",
    "clipboard":"1f4cb",
    "pushpin":"1f4cc",
    "round_pushpin":"1f4cd",
    "paperclip":"1f4ce",
    "straight_ruler":"1f4cf",
    "triangular_ruler":"1f4d0",
    "bookmark_tabs":"1f4d1",
    "ledger":"1f4d2",
    "notebook":"1f4d3",
    "notebook_with_decorative_cover":"1f4d4",
    "closed_book":"1f4d5",
    "book":"1f4d6",
    "open_book":"1f4d6",
    "green_book":"1f4d7",
    "blue_book":"1f4d8",
    "orange_book":"1f4d9",
    "books":"1f4da",
    "name_badge":"1f4db",
    "scroll":"1f4dc",
    "memo":"1f4dd",
    "pencil":"1f4dd",
    "telephone_receiver":"1f4de",
    "pager":"1f4df",
    "fax":"1f4e0",
    "satellite":"1f4e1",
    "loudspeaker":"1f4e2",
    "mega":"1f4e3",
    "outbox_tray":"1f4e4",
    "inbox_tray":"1f4e5",
    "package":"1f4e6",
    "e-mail":"1f4e7",
    "incoming_envelope":"1f4e8",
    "envelope_with_arrow":"1f4e9",
    "mailbox_closed":"1f4ea",
    "mailbox":"1f4eb",
    "mailbox_with_mail":"1f4ec",
    "mailbox_with_no_mail":"1f4ed",
    "postbox":"1f4ee",
    "postal_horn":"1f4ef",
    "newspaper":"1f4f0",
    "iphone":"1f4f1",
    "calling":"1f4f2",
    "vibration_mode":"1f4f3",
    "mobile_phone_off":"1f4f4",
    "no_mobile_phones":"1f4f5",
    "signal_strength":"1f4f6",
    "camera":"1f4f7",
    "video_camera":"1f4f9",
    "tv":"1f4fa",
    "radio":"1f4fb",
    "vhs":"1f4fc",
    "twisted_rightwards_arrows":"1f500",
    "repeat":"1f501",
    "repeat_one":"1f502",
    "arrows_clockwise":"1f503",
    "arrows_counterclockwise":"1f504",
    "low_brightness":"1f505",
    "high_brightness":"1f506",
    "mute":"1f507",
    "speaker":"1f508",
    "sound":"1f509",
    "loud_sound":"1f50a",
    "battery":"1f50b",
    "electric_plug":"1f50c",
    "mag":"1f50d",
    "mag_right":"1f50e",
    "lock_with_ink_pen":"1f50f",
    "closed_lock_with_key":"1f510",
    "key":"1f511",
    "lock":"1f512",
    "unlock":"1f513",
    "bell":"1f514",
    "no_bell":"1f515",
    "bookmark":"1f516",
    "link":"1f517",
    "radio_button":"1f518",
    "back":"1f519",
    "end":"1f51a",
    "on":"1f51b",
    "soon":"1f51c",
    "top":"1f51d",
    "underage":"1f51e",
    "keycap_ten":"1f51f",
    "capital_abcd":"1f520",
    "abcd":"1f521",
    "1234":"1f522",
    "symbols":"1f523",
    "abc":"1f524",
    "fire":"1f525",
    "flashlight":"1f526",
    "wrench":"1f527",
    "hammer":"1f528",
    "nut_and_bolt":"1f529",
    "hocho":"1f52a",
    "knife":"1f52a",
    "gun":"1f52b",
    "microscope":"1f52c",
    "telescope":"1f52d",
    "crystal_ball":"1f52e",
    "six_pointed_star":"1f52f",
    "beginner":"1f530",
    "trident":"1f531",
    "black_square_button":"1f532",
    "white_square_button":"1f533",
    "red_circle":"1f534",
    "large_blue_circle":"1f535",
    "large_orange_diamond":"1f536",
    "large_blue_diamond":"1f537",
    "small_orange_diamond":"1f538",
    "small_blue_diamond":"1f539",
    "small_red_triangle":"1f53a",
    "small_red_triangle_down":"1f53b",
    "arrow_up_small":"1f53c",
    "arrow_down_small":"1f53d",
    "clock1":"1f550",
    "clock2":"1f551",
    "clock3":"1f552",
    "clock4":"1f553",
    "clock5":"1f554",
    "clock6":"1f555",
    "clock7":"1f556",
    "clock8":"1f557",
    "clock9":"1f558",
    "clock10":"1f559",
    "clock11":"1f55a",
    "clock12":"1f55b",
    "clock130":"1f55c",
    "clock230":"1f55d",
    "clock330":"1f55e",
    "clock430":"1f55f",
    "clock530":"1f560",
    "clock630":"1f561",
    "clock730":"1f562",
    "clock830":"1f563",
    "clock930":"1f564",
    "clock1030":"1f565",
    "clock1130":"1f566",
    "clock1230":"1f567",
    "mount_fuji":"1f5fb",
    "tokyo_tower":"1f5fc",
    "statue_of_liberty":"1f5fd",
    "japan":"1f5fe",
    "moyai":"1f5ff",
    "grinning":"1f600",
    "grin":"1f601",
    "joy":"1f602",
    "smiley":"1f603",
    "smile":"1f604",
    "sweat_smile":"1f605",
    "laughing":"1f606",
    "satisfied":"1f606",
    "innocent":"1f607",
    "smiling_imp":"1f608",
    "wink":"1f609",
    "blush":"1f60a",
    "yum":"1f60b",
    "relieved":"1f60c",
    "heart_eyes":"1f60d",
    "sunglasses":"1f60e",
    "smirk":"1f60f",
    "neutral_face":"1f610",
    "expressionless":"1f611",
    "unamused":"1f612",
    "sweat":"1f613",
    "pensive":"1f614",
    "confused":"1f615",
    "confounded":"1f616",
    "kissing":"1f617",
    "kissing_heart":"1f618",
    "kissing_smiling_eyes":"1f619",
    "kissing_closed_eyes":"1f61a",
    "stuck_out_tongue":"1f61b",
    "stuck_out_tongue_winking_eye":"1f61c",
    "stuck_out_tongue_closed_eyes":"1f61d",
    "disappointed":"1f61e",
    "worried":"1f61f",
    "angry":"1f620",
    "rage":"1f621",
    "cry":"1f622",
    "persevere":"1f623",
    "triumph":"1f624",
    "disappointed_relieved":"1f625",
    "frowning":"1f626",
    "anguished":"1f627",
    "fearful":"1f628",
    "weary":"1f629",
    "sleepy":"1f62a",
    "tired_face":"1f62b",
    "grimacing":"1f62c",
    "sob":"1f62d",
    "open_mouth":"1f62e",
    "hushed":"1f62f",
    "cold_sweat":"1f630",
    "scream":"1f631",
    "astonished":"1f632",
    "flushed":"1f633",
    "sleeping":"1f634",
    "dizzy_face":"1f635",
    "no_mouth":"1f636",
    "mask":"1f637",
    "smile_cat":"1f638",
    "joy_cat":"1f639",
    "smiley_cat":"1f63a",
    "heart_eyes_cat":"1f63b",
    "smirk_cat":"1f63c",
    "kissing_cat":"1f63d",
    "pouting_cat":"1f63e",
    "crying_cat_face":"1f63f",
    "scream_cat":"1f640",
    "no_good":"1f645",
    "ok_woman":"1f646",
    "bow":"1f647",
    "see_no_evil":"1f648",
    "hear_no_evil":"1f649",
    "speak_no_evil":"1f64a",
    "raising_hand":"1f64b",
    "raised_hands":"1f64c",
    "person_frowning":"1f64d",
    "person_with_pouting_face":"1f64e",
    "pray":"1f64f",
    "rocket":"1f680",
    "helicopter":"1f681",
    "steam_locomotive":"1f682",
    "railway_car":"1f683",
    "bullettrain_side":"1f684",
    "bullettrain_front":"1f685",
    "train2":"1f686",
    "metro":"1f687",
    "light_rail":"1f688",
    "station":"1f689",
    "tram":"1f68a",
    "train":"1f68b",
    "bus":"1f68c",
    "oncoming_bus":"1f68d",
    "trolleybus":"1f68e",
    "busstop":"1f68f",
    "minibus":"1f690",
    "ambulance":"1f691",
    "fire_engine":"1f692",
    "police_car":"1f693",
    "oncoming_police_car":"1f694",
    "taxi":"1f695",
    "oncoming_taxi":"1f696",
    "car":"1f697",
    "red_car":"1f697",
    "oncoming_automobile":"1f698",
    "blue_car":"1f699",
    "truck":"1f69a",
    "articulated_lorry":"1f69b",
    "tractor":"1f69c",
    "monorail":"1f69d",
    "mountain_railway":"1f69e",
    "suspension_railway":"1f69f",
    "mountain_cableway":"1f6a0",
    "aerial_tramway":"1f6a1",
    "ship":"1f6a2",
    "rowboat":"1f6a3",
    "speedboat":"1f6a4",
    "traffic_light":"1f6a5",
    "vertical_traffic_light":"1f6a6",
    "construction":"1f6a7",
    "rotating_light":"1f6a8",
    "triangular_flag_on_post":"1f6a9",
    "door":"1f6aa",
    "no_entry_sign":"1f6ab",
    "smoking":"1f6ac",
    "no_smoking":"1f6ad",
    "put_litter_in_its_place":"1f6ae",
    "do_not_litter":"1f6af",
    "potable_water":"1f6b0",
    "non-potable_water":"1f6b1",
    "bike":"1f6b2",
    "no_bicycles":"1f6b3",
    "bicyclist":"1f6b4",
    "mountain_bicyclist":"1f6b5",
    "walking":"1f6b6",
    "no_pedestrians":"1f6b7",
    "children_crossing":"1f6b8",
    "mens":"1f6b9",
    "womens":"1f6ba",
    "restroom":"1f6bb",
    "baby_symbol":"1f6bc",
    "toilet":"1f6bd",
    "wc":"1f6be",
    "shower":"1f6bf",
    "bath":"1f6c0",
    "bathtub":"1f6c1",
    "passport_control":"1f6c2",
    "customs":"1f6c3",
    "baggage_claim":"1f6c4",
    "left_luggage":"1f6c5",
    "hash":"0023-20e3",
    "zero":"0030-20e3",
    "one":"0031-20e3",
    "two":"0032-20e3",
    "three":"0033-20e3",
    "four":"0034-20e3",
    "five":"0035-20e3",
    "six":"0036-20e3",
    "seven":"0037-20e3",
    "eight":"0038-20e3",
    "nine":"0039-20e3",
    "flag-ae":"1f1e6-1f1ea",
    "ae":"1f1e6-1f1ea",
    "flag-at":"1f1e6-1f1f9",
    "at":"1f1e6-1f1f9",
    "flag-au":"1f1e6-1f1fa",
    "au":"1f1e6-1f1fa",
    "flag-be":"1f1e7-1f1ea",
    "be":"1f1e7-1f1ea",
    "flag-br":"1f1e7-1f1f7",
    "br":"1f1e7-1f1f7",
    "flag-ca":"1f1e8-1f1e6",
    "ca":"1f1e8-1f1e6",
    "flag-ch":"1f1e8-1f1ed",
    "ch":"1f1e8-1f1ed",
    "flag-cl":"1f1e8-1f1f1",
    "flag-cn":"1f1e8-1f1f3",
    "cn":"1f1e8-1f1f3",
    "flag-co":"1f1e8-1f1f4",
    "co":"1f1e8-1f1f4",
    "flag-de":"1f1e9-1f1ea",
    "de":"1f1e9-1f1ea",
    "flag-dk":"1f1e9-1f1f0",
    "dk":"1f1e9-1f1f0",
    "flag-es":"1f1ea-1f1f8",
    "es":"1f1ea-1f1f8",
    "flag-fi":"1f1eb-1f1ee",
    "fi":"1f1eb-1f1ee",
    "flag-fr":"1f1eb-1f1f7",
    "fr":"1f1eb-1f1f7",
    "flag-gb":"1f1ec-1f1e7",
    "gb":"1f1ec-1f1e7",
    "uk":"1f1ec-1f1e7",
    "flag-hk":"1f1ed-1f1f0",
    "hk":"1f1ed-1f1f0",
    "flag-id":"1f1ee-1f1e9",
    "flag-ie":"1f1ee-1f1ea",
    "ie":"1f1ee-1f1ea",
    "flag-il":"1f1ee-1f1f1",
    "il":"1f1ee-1f1f1",
    "flag-in":"1f1ee-1f1f3",
    "in":"1f1ee-1f1f3",
    "flag-it":"1f1ee-1f1f9",
    "it":"1f1ee-1f1f9",
    "flag-jp":"1f1ef-1f1f5",
    "jp":"1f1ef-1f1f5",
    "flag-kr":"1f1f0-1f1f7",
    "kr":"1f1f0-1f1f7",
    "flag-mo":"1f1f2-1f1f4",
    "mo":"1f1f2-1f1f4",
    "flag-mx":"1f1f2-1f1fd",
    "mx":"1f1f2-1f1fd",
    "flag-my":"1f1f2-1f1fe",
    "my":"1f1f2-1f1fe",
    "flag-nl":"1f1f3-1f1f1",
    "nl":"1f1f3-1f1f1",
    "flag-no":"1f1f3-1f1f4",
    "no":"1f1f3-1f1f4",
    "flag-nz":"1f1f3-1f1ff",
    "nz":"1f1f3-1f1ff",
    "flag-ph":"1f1f5-1f1ed",
    "ph":"1f1f5-1f1ed",
    "flag-pl":"1f1f5-1f1f1",
    "pl":"1f1f5-1f1f1",
    "flag-pr":"1f1f5-1f1f7",
    "pr":"1f1f5-1f1f7",
    "flag-pt":"1f1f5-1f1f9",
    "pt":"1f1f5-1f1f9",
    "flag-ru":"1f1f7-1f1fa",
    "ru":"1f1f7-1f1fa",
    "flag-sa":"1f1f8-1f1e6",
    "flag-se":"1f1f8-1f1ea",
    "se":"1f1f8-1f1ea",
    "flag-sg":"1f1f8-1f1ec",
    "sg":"1f1f8-1f1ec",
    "flag-tr":"1f1f9-1f1f7",
    "tr":"1f1f9-1f1f7",
    "flag-us":"1f1fa-1f1f8",
    "us":"1f1fa-1f1f8",
    "flag-vn":"1f1fb-1f1f3",
    "vn":"1f1fb-1f1f3",
    "flag-za":"1f1ff-1f1e6",
    "za":"1f1ff-1f1e6",
    "man-man-boy":"1f468-1f468-1f466",
    "man-man-boy-boy":"1f468-1f468-1f466-1f466",
    "man-man-girl":"1f468-1f468-1f467",
    "man-man-girl-boy":"1f468-1f468-1f467-1f466",
    "man-man-girl-girl":"1f468-1f468-1f467-1f467",
    "man-woman-boy":"1f468-1f469-1f466",
    "man-woman-boy-boy":"1f468-1f469-1f466-1f466",
    "man-woman-girl":"1f468-1f469-1f467",
    "man-woman-girl-girl":"1f468-1f469-1f467-1f467",
    "man-heart-man":"1f468-2764-fe0f-1f468",
    "man-kiss-man":"1f468-2764-fe0f-1f48b-1f468",
    "woman-woman-boy":"1f469-1f469-1f466",
    "woman-woman-boy-boy":"1f469-1f469-1f466-1f466",
    "woman-woman-girl":"1f469-1f469-1f467",
    "woman-woman-girl-boy":"1f469-1f469-1f467-1f466",
    "woman-woman-girl-girl":"1f469-1f469-1f467-1f467",
    "woman-heart-woman":"1f469-2764-fe0f-1f469",
    "woman-kiss-woman":"1f469-2764-fe0f-1f48b-1f469"
  };

  return {
    emoji: codes
  }
})());

angular.module('vkEmojiPicker').directive('emojiPicker', [
  'EmojiGroups', 'vkEmojiStorage', function (emojiGroups, storage) {
    var RECENT_LIMIT = 36;

    try {
      angular.module('ui.bootstrap.popover');
      var templateUrl = 'template/emoji-picker/button-bootstrap.html';
    } catch(e) {
      try {
        angular.module('mgcrea.ngStrap.popover');
        var templateUrl = 'template/emoji-picker/button-strap.html';
      } catch(e) {
        var templateUrl = '../src/templates/emoji-button.html';
      }
    }

    return {
      restrict: 'A',
      templateUrl: templateUrl,
      scope: {
        model: '=emojiPicker',
        placement: '@placement',
        title: '@title'
      },
      link: function($scope, element, attrs) {
        var recentLimit = parseInt(attrs.recentLimit, 10) || RECENT_LIMIT;

        $scope.groups = emojiGroups.groups;
        $scope.selectedGroup = emojiGroups.groups[0];
        $scope.selectedGroup.emoji = storage.getFirst(recentLimit);

        $scope.append = function (emoji) {
          $scope.model += [' :', emoji, ':'].join('');
          storage.store(emoji);
        };

        $scope.toClassName = function (emoji) {
          return emoji.replace(/_/g, '-');
        };

        $scope.changeGroup = function (group) {
          $scope.selectedGroup = group;

          if ($scope.selectedGroup.name === 'recent') {
            $scope.selectedGroup.emoji = storage.getFirst(recentLimit);
          }
        }
      }
    };
  }
]);

angular.module('vkEmojiPicker')
  .directive('emojiPopover', ['$emojiPopover', function ($emojiPopover) {
    return {
      restrict: 'A',
      link: function($scope, element, attrs) {
        var config = { scope: $scope };

        config.title = attrs.title || '';
        config.placement = attrs.placement || 'top';
        config.template = attrs.template || '../src/templates/emoji-popover.html';

        var popover = $emojiPopover(element, config);

        $scope.$on('$destroy', function() {
          if (popover) {
            popover.destroy();
          }

          config = null;
          popover = null;
        });
      }
    };
  }]);

angular.module('vkEmojiPicker').filter('emojify', [
  'EmojiGroups', function (emojiGroups) {
    var regex = new RegExp(':(' + emojiGroups.all.join('|') + '):', 'g');

    return function (input) {
      if (input == null) {
        return '';
      }

      return input.replace(regex, function (match, text) {
        var className = text.replace(/_/g, '-');

        return "<i class='emoji-picker emoji-" + className + "' title=':" + text + ":'></i>";
      });
    }
  }
]);

angular.module('vkEmojiPicker').filter('hexify', [
  'EmojiHex', function (emojiHex) {
    return function (text) {
      if (text == null) {
        return '';
      }

      var emojiRegex = /\:([a-z0-9_+-]+)(?:\[((?:[^\]]|\][^:])*\]?)\])?\:/g;
      var matches = text.match(emojiRegex);

      if (matches === null) {
        return text;
      }

      for (var i = 0; i < matches.length; i++) {
        var emojiString = matches[i],
            property = emojiString.replace(/\:/g, '');

        if (emojiHex.emoji.hasOwnProperty(property)) {
          text = text.replace(emojiString, emojiHex.emoji[property]);
        }
      }

      return text;
    };
  }
]);

angular.module('vkEmojiPicker').factory('vkEmojiLocalStorage', function () {
  var factory = {
    length: 0
  };
  var storage = {};

  var countLength = function (storageObject) {
    var length = 0;

    angular.forEach(storageObject, function () {
      length += 1;
    });

    return length;
  };

  factory.setItem = function (key, value) {
    storage[key] = value;
    factory.length = countLength(storage);
  };

  factory.getItem = function (name) {
    var value = storage[name];

    if (value == null) {
      return null;
    }

    return value;
  };

  factory.removeItem = function (key) {
    var value = factory.getItem(key);
    delete storage[key];
    factory.length = countLength(storage);

    return value;
  };

  factory.clear = function () {
    storage = {};
  };

  factory.key = function () {
    throw new Error('Realization required');
  };

  return factory;
});

angular.module('vkEmojiPicker').provider('$emojiPopover', function() {
  var defaultSettings = {
    title: '',
    placement: 'top',
    template: 'src/templates/emoji-popover.html'
  };

  this.$get = [
    '$rootScope', '$http', '$sce', '$templateCache', '$compile',
    function ($rootScope, $http, $sce, $templateCache, $compile) {
      function EmojiPopover(element, config) {
        var $popover = {},
            fetchPromises = {},
            popoverLinker,
            popoverTemplate,
            popoverElement,
            popoverScope,
            options = angular.extend({}, defaultSettings, config),
            scope = $popover.$scope = options.scope && options.scope.$new() || $rootScope.$new();

        // Private functions

        var loadTemplate = function (template) {
          if (fetchPromises[template]) {
            return fetchPromises[template];
          }

          return (fetchPromises[template] = $http.get(template, { cache: $templateCache }).then(function (response) {
            return response.data;
          }));
        };

        var applyPlacement = function (parentElement, popoverElement) {
          var elem = parentElement[0];
          var clientRect = elem.getBoundingClientRect();
          var popoverWidth = popoverElement.prop('offsetWidth');
          var popoverHeight = popoverElement.prop('offsetHeight');
          var offset = getPopoverOffset(options.placement, clientRect, popoverWidth, popoverHeight);

          popoverElement.css({
            top: offset.top + 'px',
            left: offset.left + 'px'
          });
        };

        var getPopoverOffset = function (placement, position, popoverWidth, popoverHeight) {
          var offset;

          switch (placement) {
            case 'right':
              offset = {
                top: position.top - popoverHeight / 4,
                left: position.left + position.width
              };
              break;
            case 'bottom':
              offset = {
                top: position.top - position.height * 2,
                left: position.left
              };
              break;
            case 'left':
              offset = {
                top: position.top - popoverHeight / 4,
                left: position.left - popoverWidth
              };
              break;
            default:
              offset = {
                top: position.top - popoverHeight - position.height * 3,
                left: position.left
              };
              break;
          }

          return offset;
        };

        var destroyPopoverElement = function (scope, element) {
          if (scope) {
            scope.$destroy();
            scope = null;
          }

          if (element) {
            element.remove();
            element = null;
          }
        };

        // Public scope interface

        if (options.title) {
          scope.title = $sce.trustAsHtml(options.title);
        }

        scope.placement = options.placement;

        scope.$hide = function() {
          $popover.hide();
        };

        // Public popover interface

        $popover.$isShown = false;
        $popover.$promise = loadTemplate(options.template);
        $popover.$promise.then(function (template) {
          if (angular.isObject(template)) {
            template = template.data;
          }

          popoverTemplate = template;
          popoverLinker = $compile(template);
          element.on('click', $popover.toggle);
        });

        $popover.show = function() {
          if ($popover.$isShown) {
            return;
          }

          // Hide any existing popoverElement
          if (popoverScope && popoverElement) {
            destroyPopoverElement(popoverScope, popoverElement);
          }

          // Fetch a cloned element linked from template
          popoverScope = $popover.$scope.$new();
          popoverElement = popoverLinker(popoverScope, function (clonedElement, scope) {});

          element.after(popoverElement);
          $popover.$isShown = true;
          scope.$digest();

          popoverElement.addClass(options.placement);
          applyPlacement(element, popoverElement);
        };

        $popover.hide = function () {
          if (!$popover.$isShown) {
            return;
          }

          destroyPopoverElement(popoverScope, popoverElement);
          $popover.$isShown = false;
        };

        $popover.toggle = function () {
          $popover.$isShown ? $popover.hide() : $popover.show();
        };

        $popover.destroy = function() {
          element.off('click', $popover.toggle);
          destroyPopoverElement(popoverScope, popoverElement);
          scope.$destroy();
        };

        return $popover;
      }

      return EmojiPopover;
    }
  ];
});

angular.module('vkEmojiPicker').factory('vkEmojiStorage', [
  '$window', 'vkEmojiLocalStorage', function ($window, emojiStorage) {
    var factory = {},
        storage = $window.localStorage || emojiStorage;

    factory.store = function (value) {
      var emojiString = storage.getItem('emojiPicker');

      if (emojiString == null) {
        var emojiObject = {};
      } else {
        var emojiObject = JSON.parse(emojiString);
      }

      emojiObject[value] = value;
      storage.setItem('emojiPicker', JSON.stringify(emojiObject));
    };

    factory.getFirst = function (count) {
      var length = 0,
          emoji = [],
          emojiString = storage.getItem('emojiPicker');

      if (emojiString == null) {
        return emoji;
      }

      var emojiObject = JSON.parse(emojiString);

      angular.forEach(emojiObject, function (value) {
        if (length === count) {
          return;
        }

        emoji.push(value);
        length += 1;
      });

      return emoji;
    };

    factory.clear = function () {
      storage.clear();
    };

    return factory;
  }
]);
