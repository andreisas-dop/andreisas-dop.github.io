---
layout: default
title: Cinematographer Booking Form
permalink: /bookingform
---


<div class="row">
   <h1 class="text-center">Cinematographer Booking Form</h1>
</div>

<form class="" action="https://formspree.io/f/xleyyokk" method="POST" id="booking">

<!----------------------------------------------------------------------------------- -->
  <div id="section-1">
    <div class="row">
      <p>
      Let’s start by getting some information about you and your project.
      </p>

      <p>
      All information provided in this form will be treated as confidential and protected by an implied non-compete agreement.
      </p>
    </div>

    <div class="row">
      <p>Email
      <span class="red">*</span>
      </p>
      <input type="email" name="Email" placeholder="me@mail.com" required="">
    </div>

    <div class="row">
      <p>
      Full name
      <span class="red">*</span>
      </p>
      <input type="text" name="Full name" placeholder="Your Name" required="">
    </div>


  <!-- div id="section-1" -->
    <!-- h3 class="text-center red">Project Details</h3-->

    <div class="row">
      <img src="/assets/img/form-1.jpg">

      <p>&nbsp;</p>

      <p>What is the <b>name</b> or <b>working title</b> of the project?
      <span class="red">*</span>
      </p>

      <input type="text" name="Project name" placeholder="Project name" required="">
    </div>

    <div class="row col-2">
      <p>What <b>type of content</b> is being created?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" name="Content type" id="content-type-film-tv"      value="Film & TV                "> <label>Film & TV                  </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-broadcast"    value="Broadcast Advertising    "> <label>Broadcast Advertising      </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-music"        value="Music Video              "> <label>Music Video                </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-online"       value="Online & Branded Content "> <label>Online & Branded Content   </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-social"       value="Social Media Content     "> <label>Social Media Content       </label><br/>
        </div>
        <div>
          <input type="radio" required="" name="Content type" id="content-type-educational"  value="Educational Video        "> <label>Educational Video          </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-corporate"    value="Corporate Video          "> <label>Corporate Video            </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-event"        value="Live & Event Video       "> <label>Live & Event Video         </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-art"          value="Video Art & Installations"> <label>Video Art & Installations  </label><br/>
          <input type="radio" required="" name="Content type" id="content-type-experimental" value="Experimental             "> <label>Experimental               </label><br/>
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      What is the <b>runtime</b> of the primary deliverable or <b>compound runtime</b> for serialised content? (in minutes)
      </p>
      <input type="number" name="Content runtime">
    </div>

    <div class="row col-2">
      <img src="/assets/img/form-2.jpg">

      <p>&nbsp;</p>

      <p class="text-right text-center-xs text-center-sm">
      What is the primary <b>platform</b> where the content will be played?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" name="Content platform" id="platform-cinema"    value="Cinema                "> <label>Cinema                </label><br/>
          <input type="radio" required="" name="Content platform" id="platform-broadcast" value="Broadscast TV         "> <label>Broadscast TV         </label><br/>
          <input type="radio" required="" name="Content platform" id="platform-video"     value="Video on Demand       "> <label>Video on Demand       </label><br/>
        </div>
        <div>
          <input type="radio" required="" name="Content platform" id="platform-online"    value="Online, YouTube, Vimeo"> <label>Online, YouTube, Vimeo</label><br/>
          <input type="radio" required="" name="Content platform" id="platform-social"    value="Social Media          "> <label>Social Media          </label><br/>
          <input type="radio" required="" name="Content platform" id="platform-other"     value="Other                 "
                                       onclick="check_validate('aspect'); enable_other(this, 'platform-other-text')"> <label>Other</label>:
             <input type="text" name="Content platform (other)" id="platform-other-text" placeholder="Other platform">
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      In what <b>aspect ratio</b> are deliverables desired?
      <span class="red">*</span><br/>
      <span class="small">Selecting multiple outputs can present composition and visual challenges.</span>
      </p>

      <div>
        <div>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-widescreen" value="Widescreen - 2.4:1 Cinemascope        "  onclick="check_validate('checkbox_1')"> <label>Widescreen - 2.4:1 Cinemascope   </label><br/>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-standard"   value="Standard - 16:9 HD / UHD              "  onclick="check_validate('checkbox_1')"> <label>Standard - 16:9 HD / UHD         </label><br/>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-square"     value="Instagram & Twitter- 1:1 Square       "  onclick="check_validate('checkbox_1')"> <label>Instagram & Twitter- 1:1 Square  </label><br/>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-portrait"   value="Instagram Portrait - 4:5              "  onclick="check_validate('checkbox_1')"> <label>Instagram Portrait - 4:5         </label><br/>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-vertical"   value="Instagram Reel or Story, TikTok - 9:16"  onclick="check_validate('checkbox_1')"> <label>Instagram Reel or Story, TikTok - 9:16 Vertical Video</label><br/>
          <input type="checkbox" class="checkbox_1" name="Aspect ratio" id="ratio-other"      value="Other                                 "  onclick="check_validate('checkbox_1'); enable_other(this, 'ratio-other-text')"> <label>Other</label>:
          <input type="text" name="Aspect ratio (other)" id="ratio-other-text" placeholder="Other aspect ratio">
        </div>
      </div>
    </div>

    <div class="row">
      <p>&nbsp;</p>
      <input type="button" class="button medium text-center" value="Next" onclick="section_forward(1)">
    </div>

  </div>


<!----------------------------------------------------------------------------------- -->
  <div id="section-2">
    <!-- h3 class="text-center red">Operational Details</h3-->

    <div class="row">
      <img src="/assets/img/form-3.jpg">

      <p>&nbsp;</p>

      <p>Please provide any assigned <b>Job Number</b> or <b>PO Number</b> for the project.
      </p>
      <input type="text" name="Project job/PO number" placeholder="Job/PO number">
    </div>

    <div class="row">
      <p>What <b>brand, label or other entity</b> is commissioning the project?
      </p>
      <input type="text" name="Project brand" placeholder="Brand, label or commisioning entity">
    </div>

    <div class="row">
      <p>What <b>type of service</b> would you like me to provide?
      <span class="red">*</span><br/>
      <span class="small">In modern production, it can be hard to differentiate between the need for a <a href="https://en.wikipedia.org/wiki/Cinematographer" target="_blank">Cinematographer</a>, a <a href="https://en.wikipedia.org/wiki/Camera_operator" target="_blank">Camera Operator</a> or a <a href="https://en.wikipedia.org/wiki/Videography" target="_blank">Videographer</a>. The decision should be made based on the project scope, scale, intended distribution and budget.</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" name="Service type" id="service-cinema"   required="" class="required" value="Cinematographer / Director of Photography"> <label>Cinematographer / Director of Photography</label><br/>
          <input type="radio" name="Service type" id="service-operator" required="" class="required" value="Camera Operator / Videographer           "> <label>Camera Operator / Videographer           </label><br/>
          <input type="radio" name="Service type" id="service-post"     required="" class="required" value="Post-production Supervisor               "> <label>Post-production Supervisor               </label><br/>
          <input type="radio" name="Service type" id="service-other"    required="" class="required" value="Other                                    "
                                                                                   onclick="enable_other(this, 'service-other-text')"> <label>Other</label>:
             <input type="text" name="Service type (other)" id="service-other-text" placeholder="Other service">
        </div>
      </div>
    </div>

    <div class="row col-2">
      <div class="inner">
        <div>
          <p class="text-right text-center-xs text-center-sm">
          What is the shoot <b>start date</b>?
          </p>
          <input type="date" name="Shoot start date">
        </div>
        <div>
          <p class="text-right text-center-xs text-center-sm">
          What is the shoot <b>wrap date</b>?
          </p>
          <input type="date" name="Shoot wrap date">
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      What type of work <b>schedule</b> would you like to implement?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" class="required" value="8+1 SWD"     id="schedule-8"     name="Schedule"> <label>8 Hours "On Camera" with 1 Hour Lunch Break (8+1 SWD)  </label><br/>
          <input type="radio" required="" class="required" value="10+1 BWD"    id="schedule-10"    name="Schedule"> <label>10 Hours "On Camera" with 1 Hour Lunch Break (10+1 BWD)</label><br/>
          <input type="radio" required="" class="required" value="9 CWD"       id="schedule-9"     name="Schedule"> <label>9 Continuous Hours "On Camera" (9 CWD)                 </label><br/>
          <input type="radio" required="" class="required" value="Other"       id="schedule-other" name="Schedule"  onclick="enable_other(this, 'schedule-other-text')"> <label>Other</label>:
              <input type="text" name="Schedule (other)" id="schedule-other-text" placeholder="Other schedule">
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      How many <b>prep days</b> are provisioned?
      </p>
      <input type="number" name="Prep days">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      Will <b>post-production consultancy</b> or <b>"wrap days"</b> be required?<br/>
      <span class="small">If yes, please state how many days are expected.</span>
      </p>
      <input type="number" name="Post-production days">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      What is the desired <b>publishing or release date</b>?
      </p>
      <input type="date" name="Project release date">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      Please provide the <b>address</b> of the main shooting location if one has been already selected.<br/>
      <span class="small">If locations have not been booked or selected, we can discuss options to fit the visual aesthetic goals of the project.</span>
      </p>
      <input type="text" name="Location address" placeholder="Location address">
    </div>

    <div class="row col-2">
      <p class="text-right text-center-xs text-center-sm">
      What is the project's <b>budget band</b>?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" class="required" name="Budget band" id="budget-1k"      value="Up to £1,000                       "> <label>Up to £1,000                       </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-3k"      value="£1,000 to £3,000                   "> <label>£1,000 to £3,000                   </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-6k"      value="£3,000 to £6,000                   "> <label>£3,000 to £6,000                   </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-12k"     value="£6,000 to £12,000                  "> <label>£6,000 to £12,000                  </label><br/>
        </div>
        <div>
          <input type="radio" required="" class="required" name="Budget band" id="budget-50k"     value="£12,000 to £50,000                 "> <label>£12,000 to £50,000                 </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-250k"    value="£50,000 to £250,000                "> <label>£50,000 to £250,000                </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-above"   value="Above £250,000                     "> <label>Above £250,000                     </label><br/>
          <input type="radio" required="" class="required" name="Budget band" id="budget-discuss" value="I would like to discuss my options."> <label>I would like to discuss my options.</label><br/>
        </div>
      </div>
    </div>


    <div class="row text-center">
      <p>&nbsp;</p>
      <input type="button" class="button inline medium" value="Back" onclick="section_back(2)">
      &nbsp;
      <input type="button" class="button inline medium" value="Next" onclick="section_forward(2)">
    </div>

  </div>


<!----------------------------------------------------------------------------------- -->
  <div id="section-3">
    <!-- h3 class="text-center red">Film & TV Operational Details</h3-->

    <div class="row">
      <img src="/assets/img/form-4.jpg">

      <p>&nbsp;</p>

      <p>Please provide any assigned <b>Job Number</b> or <b>PO Number</b> for the project.
      </p>
      <input type="text" name="Film/TV Project job/PO number" placeholder="Job/PO number">
    </div>

    <div class="row col-2">
      <div class="inner">
        <div>
          <p class="text-right text-center-xs text-center-sm">
          What is the shoot <b>start date</b>?
          </p>
          <input type="date" name="Film/TV Shoot start date">
        </div>
        <div>
          <p class="text-right text-center-xs text-center-sm">
          What is the shoot <b>wrap date</b>?
          </p>
          <input type="date" name="Film/TV Shoot wrap date">
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      What type of work <b>schedule</b> would you like to implement?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" class="required" value="8+1 SWD"  id="schedule-8"  name="Film/TV Schedule"> <label>8 Hours "On Camera" with 1 Hour Lunch Breschedule-ak (8+1 SWD)  </label><br/>
          <input type="radio" required="" class="required" value="10+1 BWD" id="schedule-10" name="Film/TV Schedule"> <label>10 Hours "On Camera" with 1 Hour Lunch Brschedule-eak (10+1 BWD)</label><br/>
          <input type="radio" required="" class="required" value="9 CWD"    id="schedule-9"  name="Film/TV Schedule"> <label>9 Continuous Hours  "On Camera"  (9 CWD)                        </label><br/>
        </div>
      </div>
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      How many <b>prep days</b> are provisioned?
      </p>
      <input type="number" name="Film/TV Prep days">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      Will <b>post-production consultancy</b> or <b>"wrap days"</b> be required?<br/>
      <span class="small">If yes, please state how many days are expected.</span>
      </p>
      <input type="number" name="Film/TV Post-production days">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      What is the desired <b>publishing or release date</b>?
      </p>
      <input type="date" name="Film/TV Project release date">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      Please provide the <b>address</b> of the main shooting location if one has been already selected.<br/>
      <span class="small">If locations have not been booked or selected, we can discuss options to fit the visual aesthetic goals of the project.</span>
      </p>
      <input type="text" name="Film/TV Location address" placeholder="Location address">
    </div>

    <div class="row col-2">
      <p class="text-right text-center-xs text-center-sm">
      What is the project's <b>budget band</b>?
      <span class="red">*</span>
      </p>

      <div class="inner">
        <div>
          <input type="radio" required="" class="required" name="Film/TV Budget band" id="budget-850k"  value="Up to £850,000 p/h        "> <label>Up to £850,000 p/h        </label><br/>
          <input type="radio" required="" class="required" name="Film/TV Budget band" id="budget-3m"    value="£850,000 to £3,000,000 p/h"> <label>£850,000 to £3,000,000 p/h</label><br/>
          <input type="radio" required="" class="required" name="Film/TV Budget band" id="budget-10m"   value="£3,000,000 to £10,000,000 "> <label>£3,000,000 to £10,000,000 </label><br/>
          <input type="radio" required="" class="required" name="Film/TV Budget band" id="budget-30m"   value="£10,000 to £30,000,000    "> <label>£10,000 to £30,000,000    </label><br/>
          <input type="radio" required="" class="required" name="Film/TV Budget band" id="budget-above" value="Above £30,000,000         "> <label>Above £30,000,000         </label><br/>
        </div>
      </div>
    </div>


    <div class="row text-center">
      <p>&nbsp;</p>
      <input type="button" class="button inline medium" value="Back" onclick="section_back(3)">
      &nbsp;
      <input type="button" class="button inline medium" value="Next" onclick="section_forward(3)">
    </div>

  </div>


<!----------------------------------------------------------------------------------- -->
  <div id="section-4">
    <div class="row">
      <p>
      Please provide contact & billing information so I can prepare a Proposal or Estimate.
      <br/>
      </p>

      <p>&nbsp;</p>

      <img src="/assets/img/form-5.jpg">

      <p>&nbsp;</p>

      <p>
      <b>Company name</b>
      </p>
      <input type="text" name="Company name" placeholder="Company Name">
    </div>

    <div class="row">
      <p>
      <b>Billing Address</b>
      <span class="red">*</span>
      </p>
      <input type="text" name="Billing address" placeholder="Billing address" required="">
    </div>

    <div class="row">
      <p>
      <b>Phone Number</b>
      <span class="red">*</span>
      </p>
      <input type="tel" name="Phone" placeholder="+440123456789" required="">
    </div>

    <div class="row">
      <p class="text-right text-center-xs text-center-sm">
      Preferred contact method:
      <span class="red">*</span><br/>
      </p>

      <div>
        <div>
          <input type="checkbox" class="contact_method" onclick="check_validate('contact_method')" value="Phone" id="contact-phone" name="Contact method"> <label>Phone</label><br/>
          <input type="checkbox" class="contact_method" onclick="check_validate('contact_method')" value="Email" id="contact-email" name="Contact method"> <label>Email</label><br/>
          <input type="checkbox" class="contact_method" onclick="check_validate('contact_method')" value="Text"  id="contact-text"  name="Contact method"> <label>Text </label><br/>
        </div>
      </div>
    </div>

    <div class="row">
      <p>
      Are you a <b>new</b> or <b>existing</b> client?
      <span class="red">*</span>
      </p>
      <div class="inner">
        <div>
          <input type="radio" required="" value="New client"       id="new" name="Client"> <label>I am a new client.       </label><br/>
          <input type="radio" required="" value="Returning client" id="old" name="Client"> <label>I am an existing client. </label><br/>
        </div>
      </div>
    </div>


    <div class="row text-center">
      <p>&nbsp;</p>
      <input type="button" class="button inline medium" value="Back" onclick="section_back(4)">
      &nbsp;
      <input type="submit" class="button inline medium" value="Submit">
    </div>

  </div>


<!----------------------------------------------------------------------------------- -->
</form>
