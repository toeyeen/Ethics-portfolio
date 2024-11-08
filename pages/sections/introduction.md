---
layout: two-cols
glowSeed: 14
glow: left
title: Introduction
---

<!-- <style scoped>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

</style> -->

<!-- Who are you? What are your career goals? What strengths do you
bring? What are some examples of your engineering experience?
What have you learned from these? What have been your biggest
challenges? What have been your biggest successes? -->
<div class="box">
<div v-click="1">
  <img alt="profile-image" style="margin-right: 1rem" class="float" src="/profile-pic.png" width="150" height="150" />

<h1 font-fast>Oluwatoyin Jolaoso</h1>
<div class="leading-10 opacity-80">
Graduate Student at <span> University of Calgary </span><br>
Creator of VueUse, Slidev, Vitest, UnoCSS.<br>
Working at NuxtLabs.<br>
</div>
<div  my-10 w-min flex="~ gap-1" items-center justify-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://toyinjolaoso.me" target="_blank" class="border-none! font-300">ToyinJolaoso.dev</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/toeyeen" target="_blank" class="border-none! font-300">Toyin</a></div>
  <div i-ri-mastodon-line op50 ma text-xl ml4 />
  <div i-ri-twitter-x-line op50 ma text-xl ml4/>
  <div><a href="https://twitter.com/toyin_jolaoso" target="_blank" class="border-none! font-300">Toeyeen</a></div>
</div>
</div>

</div>

::right::
<ul v-click="2">
<li>My name is <span v-mark="{ at: 3, color: '#ffcd00', type: 'underline' }"> Oluwatoyin Jolaoso</span></li>
<li>I am a graduate student in the Geomatics department at the  <span v-mark="{ at: 4, type: 'highlight', color: '#d6001c', brackets: 'left' }"> University of Calgary </span></li>
<li v-mark="{ at: 5, type: 'bracket', color: '#ffcd00', strokeWidth: 3}"> I am passionate about creating innovative solutions for everyday problems. I find great joy in breaking down complex issues into manageable parts, allowing me to see the bigger picture and develop effective solutions.</li>
<li>Professionally, I have experience as a software engineer and an account manager. In this field it has made it easy to bring my ideas into realization faster.</li>
<li>A notable success in my career has been successfully transitioning into the tech industry. Initially <span v-mark="{at: 6, type: 'strike-through', color: '#d6001c'}"> daunting </span>, this journey taught me resilience and adaptability. </li>
<!-- <li>As I often say in Pidgin English, 'everybody go dey alright las las'—meaning that things may seem uncertain at first, but they will work out in the end.</li> -->
</ul>
