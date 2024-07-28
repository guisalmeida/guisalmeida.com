---
title: An Introduction to accessibility guidelines
description: A brief introduction to the Accessibility Guidelines, its versions, levels and criteria.
date: 2024-07-28 10:04:43
thumbnailImage: ../../static/assets/img/accessibility-guidelines.png
category: blog
tags: 
- accessibility
- wcag
---
___
 
## Index

```toc
exclude: Index
```
---
> This post is the first part of a series of two posts about accessibility, you can read the second one here: [guisalmeida.com/accessibility-guidelines](/implement-accessibility-tests/). 

## 1 Intro  

This research was extracted from my thesis for my graduation in computer science, where the topic addressed was the lack of accessibility tests in software projects and how this can be improved and implemented.


### 1.1 Accessibility a social issue  

A Social issue is always an attraction to stimulate technological developments and offer new tools to support communities in general. In the current context, the web has become almost indispensable in everyday life, somehow facilitating people's lives.
This brought a great challenge, ensuring that everyone has access to these technologies, which are mostly available through web pages. Where people with some type of disability find it difficult to interact, making their experience negative and disregarding the rights that these citizens have before the laws to minimize segregation and discrimination.

The lack of knowledge on the part of those who develop and the lack of incentive and regulation by the responsible bodies are placed as the main characteristics of this problem. To minimize and standardize these difficulties, there are accessibility practices on the web, which ensure better interaction for users with disabilities. 
With the increase in internet use worldwide, nations have adopted guidelines to standardize product development and the provision of content on the web. 

The international organization [W3C](https://www.w3.org/) launched an initiative whose main mission is to coordinate international, technical and human efforts to improve web accessibility. It is responsible for the important set of accessibility guidelines, called **WCAG (Web Content Accessibility Guidelines)**.  

---

## 2 WCAG 1.0 (First Version)
In 1999, the first version of the guidelines, WCAG 1.0, was released as an official W3C document. These guidelines have since been used by governments and companies as a standard for developing accessible web projects. The document presents three main levels characterized by the use of the letter “A” only as a symbol, such as the use of stars to characterize the quality of a product:

### 2.1 Level A
this is the minimum level, where the most significant accessibility barriers are found. Complying only with the level A criteria does not guarantee a highly accessible website; 
### 2.2 Level AA
this is the recommended level, complying with all the Level AA success criteria guarantees a highly accessible website, that is, it will be accessible to most users, under most circumstances and using most technologies; 
### 2.3 Level AAA
The triple A conformance level is quite meticulous, that is, it aims to ensure an optimized level of accessibility. Most of the success criteria for level AAA refer to very specific situations, usually aiming to refine the success criteria for level AA. Maintaining compliance with certain success criteria for level AAA can be a costly process and, at times, difficult to implement. Therefore, many websites do not have content that applies to the success criteria for level AAA.

---
## 3 WCGA 2.0
In December 2008, nine years after the release of the first version, the W3C released the second version, WCAG 2.0. The new version of the document was necessary to meet the new technologies that emerged between 1999 and 2008.  
The definition of the WCAG 2.0 standard was based on WCAG 1.0, but new recommendations were also made. One of the main changes was that instead of each guideline having *checkpoints* or *checklists*, 61 success criteria were presented, which are statements that can be tested automatically or manually to verify whether web content is accessible or not.
It is through these success criteria that the “A”, “AA” or “AAA” levels of conformity are established. In this version, 12 guidelines are organized according to 4 principles, which constitute the foundation of web accessibility. 



### 3.1 Principles
According to these principles, to be accessible, the content of web pages must be:

#### 3.1.1 Perceivable
Information and interface components must be presented to users in ways that they can perceive. Its guidelines are:
- Provide textual alternatives for any non-textual content; 
- Provide alternatives for multimedia; 
- Create content that can be presented in different ways without losing information or structure; 
- Make it easy for users to see and hear content, including separating the foreground and background layers.

#### 3.1.2 Operable
User interface components and navigation should be operable.
Its guidelines are:  
- Make all functionality available on the keyboard;
- Provide sufficient time for users to read and use the content;
- Do not design content in a way that is known to cause seizures and physical reactions;
- Provide ways to help users navigate, locate content, and determine where they are.

#### 3.1.3 Understandable
Information and the operation of the interface should be understandable.
Its guidelines are:  
- Make text content readable and understandable;
- Make web pages appear and function in a predictable manner;
- Help users avoid and correct errors.

#### 3.1.4 Robust
Content must be robust enough to be interpreted concisely by a variety of user agents, including assistive technology features. Its guidelines are:
- Maximize compatibility between current and future user agents, including assistive technology features.

---
## 4 Latest Updates
By the date of this post, the most current version as of this writing is WCAG 2.2, which was published in October 2023. It extends version 2.1, and content that conforms to this version also conforms to previous versions. By following WCAG 2.2 guidelines, developers will make content more accessible to a wide range of people with disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement, speech impairments, photosensitivity, and other combinations of these, and some accommodation for learning disabilities and cognitive limitations.

This new version contains the 4 principles, 13 guidelines and 78 success criteria. The conformance levels remain the same: A, AA and AAA. Therefore, 17 success criteria and a new guideline have been added to the **Operable principle**: 
- Make it easier for users to operate functionality through inputs other than the keyboard.

The success criteria are categorized into conformance levels. Sites must meet:
- 31 success criteria to achieve a conformance level of A.
- 55 (31 levels A and 24 levels AA) success criteria to achieve a conformance level of A.
- 86 (31 levels A, 24 levels AA and 31 levels AAA) success criteria to achieve a conformance level of AAA.


---

## 5 References
- https://www.w3.org/TR/WCAG22/
- https://www.w3.org/WAI/tips/developing/


---
## 6 Conclusion
The accessibility guidelines help us not only to comply with the standard but also to keep our projects accessible to those who need them. 
They are an important guide that should be understood by all those who work in some way with the web. And that was the purpose of sharing this brief introduction to the subject in this post.  
What did you think of this post? Do you have any questions, suggestions or criticisms? Leave a reaction or a comment below. Thanks for visiting! 😉