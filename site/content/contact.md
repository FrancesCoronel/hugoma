---
title: Contact 📨️
description: Get in touch with me!
banner: https://i.imgur.com/0n5zqiA.jpg
url: /contact/
aliases:
  - /contact-me/
  - /get-in-touch/
---

## You can contact me using the form below.

<section class="contact-form">
  <form method="POST" action="https://formspree.io/hello@fvcproductions.com">
    <input type="hidden" name="_subject" value="Hugoma Theme - New Contact Message 📥" />
    <div class="field">
      <label class="label">Your name</label>
      <div class="control has-icons-left">
        <input class="input" autocomplete="on" type="text" name="name" placeholder="Frances Coronel">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input class="input" autocomplete="on" type="email" name="email" placeholder="hello@fvcproductions.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Your message</label>
      <div class="control">
        <textarea class="textarea" spellcheck="true" rows="5" name="message" id="message" placeholder="I want to contact you about..."></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-primary">Send message</button>
      </div>
    </div>
  </form>
</section>

## Here's what the code looks like

This form uses [Formspree](https://formspree.io/) which doesn't require anything else beyond a simple email verification!

```html
<section class="contact-form">
  <form method="POST" action="https://formspree.io/hello@fvcproductions.com">
    <input type="hidden" name="_subject" value="Hugoma Theme - New Contact Message 📥" />
    <div class="field">
      <label class="label">Your name</label>
      <div class="control has-icons-left">
        <input class="input" autocomplete="on" type="text" name="name" placeholder="Frances Coronel">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left">
        <input class="input" autocomplete="on" type="email" name="email" placeholder="hello@fvcproductions.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>
    <div class="field">
      <label class="label">Your message</label>
      <div class="control">
        <textarea class="textarea" spellcheck="true" rows="5" name="message" id="message" placeholder="I want to contact you about..."></textarea>
      </div>
    </div>
    <div class="field is-grouped">
      <div class="control">
        <button type="submit" class="button is-primary">Send message</button>
      </div>
    </div>
  </form>
</section>
```
