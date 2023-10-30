---
title: Modern web and Email Marketing
description: After leaving float aside and learning the wonderful flexbox, creating layouts with display grid, the facilities of a preprocessor like Sass can bring to the project and the use of semantic tags, not to mention frameworks among other modern web technologies. Here we are faced with the challenge of creating a HTML email marketing template for our company's campaigns.
date: 2020-07-23 06:49:07
thumbnailImage: ../../static/assets/img/thumb-mail.png
category: blog
tags: 
- html
- email
---

___
## Index

```toc
exclude: Index
```
---
## 1 Intro

Daily in my current job, I work with automated email clients, one of our solution products, which motivated me to research more on the subject and write this post to clarify some doubts about how to create email marketing campaigns in a simple and uncomplicated way.  

---
### 1.1 What changes?

Well, that was the question I asked myself until recently and the answer is YES, it changes a lot. HTML email marketing techniques are a little different, and not everything that works on websites will work in email providers.  
But the idea of this post is not to technically delve into everything that email supports and all its specificities. I intend here to give an overview of how to assemble a simple template with important tips to help those who are creating their first email template in HTML.  

---
## 2 Structure

Be aware that email HTML is different from website HTML. As I mentioned in the post description, some things that work on websites won't necessarily work on email marketing, mainly `divs`, `sections`, and external CSS stylesheets, among others. This is because web pages are always rendered in browsers, while email will be rendered according to the email provider and each one has its own rules. Therefore, the ideal is to simplify and the best way is to use HTML tables as we will see below.

---
### 2.1 Layout

We will create our template from this layout throughout the post.  
<!-- Access the layout [here](https://www.figma.com/file/RYosfog8wshbbndVRoYE14/assets?node-id=5%3A3).   -->

![Layout](../../static/assets/img/layout.jpg)

---
### 2.2 Basic structure

* The `DOCTYPE` declares the type of HTML tags the document has and what kind of rules to expect, in normal sites HTML5 is currently used, but for emails the most recommended is XHTML 1.0. To learn more about the differences click [here](https://www.campaignmonitor.com/blog/email-marketing/2019/05/correct-doctype-to-use-in-html-email/).  
* Another important parameter that must be passed is the encoding in `UTF-8` that will guarantee that your message can be read correctly in several email clients.  

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
    <!--Here goes the content that should be shown on the screen-->
</body>
</html>
```
---

### 2.3 Adding Content with Tables

* Added the `link` tag importing the font we are using in the layout, added the inline style with a list of fonts. The important thing is that we always put similar alternative fonts for situations where the main font cannot be displayed.
* In the `Table` tag it is recommended to leave the `cellpaddding` and `cellspacing` values as `0` to avoid unwanted spaces in your email.
* In this part we created three structures of one line and one column to show the logo, the main call and the other call.  

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body style="font-family: Roboto, Arial, Helvetica, sans-serif;">
    <table bgcolor="#fff" width="600px" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <table cellspacing="0" cellpadding="0" width="600">
                    <tr height="80">
                        <td align="center">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/logo.jpg" alt="Logo">
                        </td>
                    </tr>
                    <tr bgcolor="#6F967E">
                        <td style="padding: 20px 80px; color: #fff;" align="center">
                            Uma seleção de produtos
                            <h1 style="margin: 5px 0;">especial para você</h1>
                            <small>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</small>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #6F967E; padding: 0 80px 20px; font-size: 12px;">
                            <h2 style="margin: 20px 0 10px;">Olá Guilherme</h2>
                            Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só:
                        </td>
                    </tr>
                </table>
              </td>
          </tr>
    </table>
</body>
</html>
```

With that we already have some things rendering on screen:  

![Layout começo](../../static/assets/img/layout1.png)

---

## 3 Good practices

Before we add the images, it's worth a tip.  
There is a practice still used by some companies that consists of transforming every email into an image, but email providers have a standard security block for displaying any image format that is in an email, being necessary the user to accept the visualization of the images.  

![Broken image](../../static/assets/img/template-html-email-2.png)  
Source: https://resultadosdigitais.com.br/blog/template-html-email/

This doesn't work as well as the image above shows. The email needs to show what it came from right away. By using image only, many recipients will ignore the email, delete it or mark it as spam. A good practice is to use a ratio of 40% images and 60% text. This way, your email is lighter and better structured.
As the content is for the web try to leave images with a maximum size of 100kb.  

---

### 3.1 Adding images

* A good practice is to always put the absolute path of the images, thus avoiding loading errors.
* The `alt` attribute provides an alternative text when an image does not load or cannot be displayed. This attribute is often used to improve the accessibility of a web page and especially of email marketing, as many email clients block images sent by unknown senders. In this situation, the function of the attribute is to facilitate the “pre-reading” for the user.
* Try not to work with `.svg` some providers like **gmail** do not render this type of file.  

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<body style="font-family: Roboto, Arial, Helvetica, sans-serif;">
    <table bgcolor="#fff" width="600px" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <table cellspacing="0" cellpadding="0" width="600">
                    <tr height="80">
                        <td align="center">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/logo.jpg" alt="Logo">
                        </td>
                    </tr>
                    <tr bgcolor="#6F967E">
                        <td style="padding: 20px 80px; color: #fff;" align="center">
                            Uma seleção de produtos
                            <h1 style="margin: 5px 0;">especial para você</h1>
                            <small>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</small>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #6F967E; padding: 0 80px 20px; font-size: 12px;">
                            <h2 style="margin: 20px 0 10px;">Olá Guilherme</h2>
                            Fizemos uma lista especial de produtos apenas para você. Isso mesmo: nesta lista temos só produtos que você pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha só:
                        </td>
                    </tr>
                </table>

                <table cellpadding="0" cellspacing="0" border="0" style="padding: 0 80px;">
                    <tr>
                        <td width="220px" style="padding-right: 20px; color: #333333">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/image%201.jpg" alt="Perfume">
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Botica 214 Golden Gardenia Eau De Parfum, 75 ml</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0 0 5px;">Botica 214 é a marca de perfumaria que retrata a alquimia do Boticário com criações que exploram ingredientes de alta qualidade...</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">De: R$ 169,90</p>
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Por: R$ 169,90</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">ou 10x de R$ 10,19</p>
                            <a title="Comprar" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="padding: 16px 0; display: block; text-align: center; line-height: 100%; width: 100%; background-color: #6F967E; color: #fff; border-radius: 5px; border: none; cursor: pointer; margin: 20px 0; font-weight:700; font-size: 16px; text-decoration: none;">Comprar</a>
                        </td>
                        <td width="220px" style="padding-left: 20px; color: #333333">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/Rectangle%203.jpg" alt="Estojo de maquiagem">
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Estojo Pincéis para Olhos com 4 unidades + Nécessaire</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0 0 5px;">Botica 214 é a marca de perfumaria que retrata a alquimia do Boticário com criações que exploram ingredientes de alta qualidade...</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">De: R$ 169,90</p>
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Por: R$ 169,90</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">ou 10x de R$ 10,19</p>
                            <a title="Comprar" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="padding: 16px 0; display: block; text-align: center; line-height: 100%; width: 100%; background-color: #6F967E; color: #fff; border-radius: 5px; border: none; cursor: pointer; margin: 20px 0; font-weight:700; font-size: 16px; text-decoration: none;">Comprar</a>
                            
                        </td>
                    </tr>
                </table>

                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td style="padding: 0 80px;">
                            <a title="Tem muito mais aqui, vem ver!" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="display: block; text-align: center; width: 100%; padding: 16px 0; background-color: #fff; color: #6F967E; border-radius: 5px; border: 1px solid #6F967E; cursor: pointer; margin: 0 0 20px; font-weight:700; font-size: 16px;text-decoration: none;">Tem muito mais aqui, vem ver!</a>
                        </td>
                    </tr>
            
                    <tr bgcolor="#6F967E" height="40px" style="vertical-align: middle;">
                        <td align="right" width="50%" style="display: inline-block; font-size: 16px; font-weight: 700; color: #fff;">
                            Siga nossas redes sociais:
                        </td>
                        <td align="left" width="50%" style="display: inline-block; margin-top: 10px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/facebook.png" alt="Facebook" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/instagram.png" alt="Instagram" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/twitter.png" alt="Twitter" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/youtube.png" alt="Youtube" style="width: 20px; height: 20px; margin-left: 5px;">
                        </td>
                    </tr>
            
                    <tr height="60">
                        <td align="center">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/logo.jpg" alt="Logo" style="width: 100px;">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 0 80px; font-size: 10px; font-weight: 300; color: #333333;">Você está recebendo esta comunicação pois se inscreveu em um de nossos sites parceiros. Caso não queira mais ofertas, clique aqui.</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
```

With that we already have our layout finished with fixed width:  

![Layout fixo finalizado](../../static/assets/img/layout2.png)

---

### 3.2 Adjusting texts

Accents and special characters may also not render correctly according to each provider and must be replaced by encoding.

If you use VS code, a tool I use to help me is [HTML accented character converter](https://github.com/enriquein/htmlentity-replacer) which can be found in the extensions tab of the ide.  

![Demo](https://github.com/enriquein/htmlentity-replacer/raw/master/demo.gif)

* Accents and special characters replaced:  

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</head>

<body style="font-family: Roboto, Arial, Helvetica, sans-serif;">
    <table bgcolor="#fff" width="600px" cellpadding="0" cellspacing="0" border="0">
        <tr>
            <td align="center">
                <table cellspacing="0" cellpadding="0" width="600">
                    <tr height="80">
                        <td align="center">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/logo.jpg" alt="Logo">
                        </td>
                    </tr>
                    <tr bgcolor="#6F967E">
                        <td style="padding: 20px 80px; color: #fff;" align="center">
                            Uma sele&ccedil;&atilde;o de produtos
                            <h1 style="margin: 5px 0;">especial para voc&ecirc;</h1>
                            <small>Todos os produtos desta lista foram selecionados a partir da sua navega&ccedil;&atilde;o. Aproveite!</small>
                        </td>
                    </tr>
                    <tr>
                        <td style="color: #6F967E; padding: 0 80px 20px; font-size: 12px;">
                            <h2 style="margin: 20px 0 10px;">Ol&aacute; Guilherme</h2>
                            Fizemos uma lista especial de produtos apenas para voc&ecirc;. Isso mesmo: nesta lista temos s&oacute; produtos que voc&ecirc; pode gostar. Seu amigo Ciclano lhe recomendou essa lista especial. Olha s&oacute;:
                        </td>
                    </tr>
                </table>

                <table cellpadding="0" cellspacing="0" border="0" style="padding: 0 80px;">
                    <tr>
                        <td width="220px" style="padding-right: 20px; color: #333333">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/image%201.jpg" alt="Perfume">
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Botica 214 Golden Gardenia Eau De Parfum, 75 ml</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0 0 5px;">Botica 214 &eacute; a marca de perfumaria que retrata a alquimia do Botic&aacute;rio com cria&ccedil;&otilde;es que exploram ingredientes de alta qualidade...</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">De: R$ 169,90</p>
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Por: R$ 169,90</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">ou 10x de R$ 10,19</p>
                            <a title="Comprar" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="padding: 16px 0; display: block; text-align: center; line-height: 100%; width: 100%; background-color: #6F967E; color: #fff; border-radius: 5px; border: none; cursor: pointer; margin: 20px 0; font-weight:700; font-size: 16px; text-decoration: none;">Comprar</a>
                        </td>
                        <td width="220px" style="padding-left: 20px; color: #333333">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/Rectangle%203.jpg" alt="Estojo de maquiagem">
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Estojo Pinc&eacute;is para Olhos com 4 unidades + N&eacute;cessaire</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0 0 5px;">Botica 214 &eacute; a marca de perfumaria que retrata a alquimia do Botic&aacute;rio com cria&ccedil;&otilde;es que exploram ingredientes de alta qualidade...</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">De: R$ 169,90</p>
                            <p style="font-weight: 700; font-size: 12px; margin: 5px 0;">Por: R$ 169,90</p>
                            <p style="font-weight: 300; font-size: 10px; margin: 0;">ou 10x de R$ 10,19</p>
                            <a title="Comprar" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="padding: 16px 0; display: block; text-align: center; line-height: 100%; width: 100%; background-color: #6F967E; color: #fff; border-radius: 5px; border: none; cursor: pointer; margin: 20px 0; font-weight:700; font-size: 16px; text-decoration: none;">Comprar</a>
                            
                        </td>
                    </tr>
                </table>

                <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                        <td style="padding: 0 80px;">
                            <a title="Tem muito mais aqui, vem ver!" href="https://github.com/GuiSAlmeida/email-mkt" rel="noopener noreferrer" target="_blank" style="display: block; text-align: center; width: 100%; padding: 16px 0; background-color: #fff; color: #6F967E; border-radius: 5px; border: 1px solid #6F967E; cursor: pointer; margin: 0 0 20px; font-weight:700; font-size: 16px;text-decoration: none;">Tem muito mais aqui, vem ver!</a>
                        </td>
                    </tr>
            
                    <tr bgcolor="#6F967E" height="40px" style="vertical-align: middle;">
                        <td align="right" width="50%" style="display: inline-block; font-size: 16px; font-weight: 700; color: #fff;">
                            Siga nossas redes sociais:
                        </td>
                        <td align="left" width="50%" style="display: inline-block; margin-top: 10px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/facebook.png" alt="Facebook" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/instagram.png" alt="Instagram" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/twitter.png" alt="Twitter" style="width: 20px; height: 20px; margin-left: 5px;">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/youtube.png" alt="Youtube" style="width: 20px; height: 20px; margin-left: 5px;">
                        </td>
                    </tr>
            
                    <tr height="60">
                        <td align="center">
                            <img src="https://raw.githubusercontent.com/GuiSAlmeida/email-mkt/master/assets/logo.jpg" alt="Logo" style="width: 100px;">
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 0 80px; font-size: 10px; font-weight: 300; color: #333333;">Voc&ecirc; est&aacute; recebendo esta comunica&ccedil;&atilde;o pois se inscreveu em um de nossos sites parceiros. Caso n&atilde;o queira mais ofertas, clique aqui.</td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
```

---

## 4 Sending the email marketing

To test I sent the email to gmail and outlook and the result follows:  

![gmail](../../static/assets/img/gmail.png)

![outlook](../../static/assets/img/outlook.png)

---

## 5 References:

* https://blog.mailee.me/email-marketing-html/
* https://resultadosdigitais.com.br/blog/template-html-email/
* https://www.targetbox.com.br/page/tutoriais/o-uso-das-alt-tags-no-email-marketing
* https://ajuda.locaweb.com.br/wiki/boas-praticas-de-html-para-email-marketing-ajuda-locaweb/
* https://www.felipefialho.com/blog/tutorial-tabela-responsiva/
* https://www.campaignmonitor.com/blog/email-marketing/2019/05/correct-doctype-to-use-in-html-email/

---
## 6 Contribute
Feel free to fork and test, fix bugs, implement more features, etc.  
**Source code**: https://github.com/GuiSAlmeida/email-mkt

---
## 7 Conclusion
Many things change from the normal way we are used to developing for the web when it comes to emails, I hope I have helped you to understand these differences.  
What did you think of this post? Do you have any suggestions or criticisms? Leave a reaction or a comment below. And thanks for visiting! 😉