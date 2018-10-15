var notificationsHTML = '<div id="add_notification_modal" class="modal fade" tabindex="-1" role="dialog"> <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <button type="button" class="notification-headline-question" data-popup="tooltip" title="The notifications section allows you to take action when a MID is in trouble. You can set up an email to notify you when certain parameters are met. For example, you may want to be emailed when the CB count for MID 12345 exceeds 50 chargebacks during the current month. You may also want to be emailed when the CB ratio exceeds 2% for all MIDs during the last 30 days. You can set up as many notifications as you like in order to stay on top of your business." data-placement="left"> <i class="fas fa-question-circle help-icon"></i> </button> <h2 class="modal-title">ADD NOTIFICATION</h2> </div><div class="modal-body"> <form id="form_alert"> <input type="hidden" id="alert_id" name="alert_id" value="0"> <div class="form-group"> <label for="alert_name"> Name <button type="button" class="notification-question" data-popup="tooltip" title="This is a descriptive name to help you identify your notification." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <input type="text" class="form-control" name="alert_name" id="alert_name" autocomplete="off" required=""> </div><div class="form-group"> <label for="midSelectAlert"> MID <button type="button" class="notification-name-question" data-popup="tooltip" title="This allows you to filter the formula to only apply to a specific MID, or to apply to all MIDs as necessary." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <select class="form-control selectpicker midSelect bs-select-hidden" data-use-id-as-value="true" data-size="25" id="midSelectAlert" required="" multiple="" name="mid"> <option value="all">All MIDs</option> <option value="1550">1002207990 | L-T-Healthy/3-CC-SBM-$100-N</option> <option value="1551">1002208040 | T-Glow/3-CC-SBM-$100-N</option> <option value="1052">RARELUCK | RL-T-rareluck/2-MACT-ONE-$100-N</option> </select> <div class="btn-group bootstrap-select show-tick form-control midSelect"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="midSelectAlert" title="Nothing selected"><span class="filter-option pull-left">Nothing selected</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button> <div class="dropdown-menu open"> <ul class="dropdown-menu inner" role="menu"> <li data-original-index="0"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">All MIDs</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">00000000 | TestAlias</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">000000000 | TestAlias</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">0000000000 | TestAlias</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">100002550 | HZN-T-Health-VPS-DEU-$200</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">100002899 | Great/11-PW-FRI-$100-N*TRNSFD*</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">1002201680 | LC-T-For-CC-SBM-$100-N</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">1002201690 | T-Myrelu/3-CC-SBM-$100-N</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul> </div></div></div><div class="form-group"> <label for=""> If <button type="button" class="notification-question" data-popup="tooltip" title="This is the first data point to use in the comparison." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <select class="form-control selectpicker bs-select-hidden" id="alertOptionsSelect" required="" name="alert_options_select"> <option value="">Select option</option> <option value="12">Chargeback dollar ratio (all)</option> <option value="7">AMEX chargeback count</option> <option value="8">AMEX chargeback ratio</option> <option value="17">AMEX transaction count</option> <option value="9">Chargeback count (all)</option> <option value="11">Chargeback ratio (all)</option> <option value="5">Discover chargeback count</option> <option value="6">Discover chargeback ratio</option> <option value="16">Discover transaction count</option> <option value="3">MasterCard chargeback count</option> <option value="30">MasterCard Last Month Transactions</option> <option value="4">MasterCard chargeback ratio</option> <option value="15">MasterCard transaction count</option> <option value="18">Chargeback dollar amount (all)</option> <option value="13">Total Sales</option> <option value="10">Transaction count (all)</option> <option value="1">Visa chargeback count</option> <option value="2">Visa chargeback ratio</option> <option value="14">Visa transaction count</option> </select> <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="alertOptionsSelect" title="Select option"><span class="filter-option pull-left">Select option</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button> <div class="dropdown-menu open"> <ul class="dropdown-menu inner" role="menu"> <li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Select option</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Chargeback dollar ratio (all)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">AMEX chargeback count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">AMEX chargeback ratio</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">AMEX transaction count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Chargeback count (all)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Chargeback ratio (all)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Discover chargeback count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Discover chargeback ratio</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Discover transaction count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="10"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">MasterCard chargeback count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="11"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">MasterCard Last Month Transactions</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="12"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">MasterCard chargeback ratio</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="13"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">MasterCard transaction count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="14"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Chargeback dollar amount (all)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="15"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Total Sales</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="16"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Transaction count (all)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="17"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Visa chargeback count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="18"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Visa chargeback ratio</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="19">' +
'<a tabindex="0" class="" style="" data-tokens="null"><span class="text">Visa transaction count</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul> </div></div></div><div class="form-group"><label for=""> is <button type="button" class="notification-question" data-popup="tooltip" title="This is the way that the two fields will be compared. If you select \'% or more of\' you\'ll also need to enter the percentage for the comparison (A percentage indicator will appear for ratio comparisons.)" data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <select class="form-control selectpicker bs-select-hidden" id="operatorsSelect" required="" name="operators"> <option value="">Select option</option> <option value="1">Greater than (&gt;)</option> <option value="2">Greater than or equal to (&gt;=)</option> <option value="3">Less than (&lt;)</option> <option value="4">Less than or equal to (&lt;=)</option> <option value="5">Equal to (=)</option> <option value="6">Not equal to (&lt;&gt;)</option> </select> <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="operatorsSelect" title="Select option"><span class="filter-option pull-left">Select option</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button> <div class="dropdown-menu open"> <ul class="dropdown-menu inner" role="menu"> <li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Select option</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Greater than (&gt;)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Greater than or equal to (&gt;=)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Less than (&lt;)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Less than or equal to (&lt;=)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Equal to (=)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">Not equal to (&lt;&gt;)</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul> </div></div><input min="0" class="form-control selectpicker" id="alertThresholdInput" required="" name="alert_threshold" type="number"> <div id="alertThresholdPct" class="input-group-addon pct" style="display: none;">%</div></div><div class="form-group"> <label for=""> Highlight Dashboard <button type="button" class="notification-question" data-popup="tooltip" title="Pick a color for this notification to use for Dashboard highlighting." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <div class="picker clearfix component-color-picker"><input type="radio" name="display_color" id="color_picker_aTBEU_0" value=""><label for="color_picker_aTBEU_0" class="none" style="background-color: rgb(255, 255, 255);"></label><input type="radio" name="display_color" id="color_picker_aTBEU_1" value="#1c3c42"><label for="color_picker_aTBEU_1" style="background-color: rgb(28, 60, 66);"></label><input type="radio" name="display_color" id="color_picker_aTBEU_2" value="#008000"><label for="color_picker_aTBEU_2" style="background-color: rgb(0, 128, 0);"></label><input type="radio" name="display_color" id="color_picker_aTBEU_3" value="#43c3dd"><label for="color_picker_aTBEU_3" style="background-color: rgb(67, 195, 221);"></label><input type="radio" name="display_color" id="color_picker_aTBEU_4" value="#ffa500"><label for="color_picker_aTBEU_4" style="background-color: rgb(255, 165, 0);"></label><input type="radio" name="display_color" id="color_picker_aTBEU_5" value="#dc503a"><label for="color_picker_aTBEU_5" style="background-color: rgb(220, 80, 58);"></label></div></div><div class="form-group"> <label for="add_alerts_type_notification"> Send Email To (optional) <button type="button" class="notification-question" data-popup="tooltip" title="Enter the email address then click the plus sign. You may add more than one email recipient." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <div class="input-group"> <input type="email" class="form-control" name="alert_email_display_only" id="alert_email" placeholder="your@email.com" maxlength="255" autocomplete="off"> <span class="input-group-btn"> <button type="button" class="btn btn-primary" name="add"> <span class="fa fa-plus"></span> </button> </span> </div></div><div class="form-group"> <div class="notification-list infiniteStringDisplayDiv"><input type="hidden" name="alert_email[]"></div></div><div class="form-group"> <label for=""> Email notifications begin on this day of each month <button type="button" class="notification-question" data-popup="tooltip" title="Indicate the day of the month you want to begin this notification. Every month you will not receive notification until after this very day." data-placement="right"> <i class="fas fa-question-circle help-icon"></i> </button> </label> <select class="form-control selectpicker bs-select-hidden" name="alert_day" id="alertDay" required=""> <option value="1">1</option> <option value="2">2</option> <option value="3">3</option> <option value="4">4</option> <option value="5">5</option> <option value="6">6</option> <option value="7">7</option> <option value="8">8</option> <option value="9">9</option> <option value="10">10</option> <option value="11">11</option> <option value="12">12</option> <option value="13">13</option> <option value="14">14</option> <option value="15">15</option> <option value="16">16</option> <option value="17">17</option> <option value="18">18</option> <option value="19">19</option> <option value="20">20</option> <option value="21">21</option> <option value="22">22</option> <option value="23">23</option> <option value="24">24</option> <option value="25">25</option> <option value="26">26</option> <option value="27">27</option> <option value="28">28</option> <option value="29">29</option> <option value="30">30</option> </select> <div class="btn-group bootstrap-select form-control"><button type="button" class="btn dropdown-toggle btn-default" data-toggle="dropdown" data-id="alertDay" title="1"><span class="filter-option pull-left">1</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span></button> <div class="dropdown-menu open"> <ul class="dropdown-menu inner" role="menu"> <li data-original-index="0" class="selected"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">1</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="1"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">2</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="2"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">3</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="3"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">4</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="4"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">5</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="5"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">6</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="6"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">7</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="7"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">8</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="8"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">9</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="9"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">10</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="10"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">11</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="11"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">12</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="12"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">13</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="13"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">14</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="14"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">15</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="15"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">16</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="16"><a tabindex="0" class="" style="" data-tokens="null">' +
'<span class="text">17</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="17"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">18</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="18"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">19</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="19"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">20</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="20"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">21</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="21"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">22</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="22"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">23</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="23"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">24</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="24"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">25</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="25"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">26</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="26"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">27</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="27"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">28</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="28"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">29</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li><li data-original-index="29"><a tabindex="0" class="" style="" data-tokens="null"><span class="text">30</span><span class="glyphicon glyphicon-ok check-mark"></span></a></li></ul> </div></div></div><div class="card error alertErrMsg" style="display: none;"> <div class="title">Please correct the following issues</div><div class="content error_msgs"> <ul> <li>Choose either highlight dashboard or to send notification via email.</li></ul> </div></div></form> </div><div class="modal-footer"> <button type="reset" class="btn btn-secondary btn-lg btn-reset" data-dismiss="modal" aria-label="Close">Reset</button><button type="button" name="submit" class="btn btn-primary btn-lg btn-save" data-dismiss="modal" aria-label="Close">Save Notification</button> </div></div></div></div>';

$('body').append(notificationsHTML);