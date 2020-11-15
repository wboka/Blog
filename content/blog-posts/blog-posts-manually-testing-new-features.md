---
layout: post
categories:
- Web Development
tags:
- testing
- widgets
date: 2019-07-23T17:00:52.704+00:00
title: Manually Testing New Widgets
draft: false

---
A brief primer in user testing. In this article, a _Widget_ refers to anything you want it to. A _Widget_ could be a product, feature, service, or whatever else needs testing.

## Questions to ask

* Does _Widget_ **work as expected**?
* Does _Widget_ **error as expected**?
* Does _Widget_ **have documentation**?
* Does _Widget_ **have helpful error messages**?
* Is _Widget_ **intuitive**?

## Methods

1. Go _sub-Widget_ by _sub-Widget_ (**RECOMMENDED**)
   * Divide the new _Widget_ into small _Widgets_
   * Test each small _Widget_ one by one
2. Check the new _Widget_ in its entirety and fix errors as they occur
   * Use _Widget_ as expected
   * Use _Widget_ in unexpected ways

## Documentation

### Why Should I Document?

* Defines WHAT the application should do and HOW to do it
* You are going to forget how things work
* Reading through the source code for an answer isn’t fun
* You’ll want to pass the application off to someone else
* Help your end users

### Documentation Methods

* Guided tour through your application
* Text files (Markdown, LaTeX)
* Printed documents
* PDFs
* Slide show
* Help text

### Good Practices

* **DO** create a useful and intuitive UX for your end users
* **DO** write in short, concise sentences
* **DO** explain features that are not obvious
* **DO** write for the user not the applications
* **DO** make it easy to find answers
* **DO** use pictures/images where appropriate
* **DON’T** rely on the end user actually reading it

### Writing Documentation

* Step by step instructions
* Explain what feature does and why
* Assume end user has no prior experience/knowledge of the - application
* Keep task steps simple and isolated
* Add pictures/images to help end users follow along

### Resources

* [Why is Documentation Extremely Important for Developers?](https://www.seguetech.com/why-is-documentation-extremely-important-for-developers/)
* [Real Users Don't Read the Manual](https://www.getopensocial.com/blog/community-management/real-users-dont-read-manuals)
* [Tips for Writing User Manuals](https://www.userfocus.co.uk/articles/usermanuals.html)
