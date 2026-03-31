# Seatwork #2 - Getting to know CSS Position and z-index.
### This seatwork will ask you to implement the different CSS position on a given code.
### short link to this .md file is: https://bit.ly/4c61P9K
#### Resources (also found in Khub week 5)
- [4 Minute Youtube Video on CSS Position](https://www.youtube.com/watch?v=YEmdHbQBCSQ)
- [CSS Position Tutorial](https://roycan.github.io/CssPositioningZIndexLab/)

### Instructions: 
1. This is individual submission in khub, but you can work with a partner.  When you submit in khub please place both your names in the submission bin.
2. Guided Activity (30 minutes), please follow what is being required.  

    - Make a copy of this .md file to your Q4 repository and name it as **SectionLNseatwork2.md** example **9LiCruzSeatwork2.md**. Place it in your q4 repository vscode local computer. Committing frequently to your Github repository.  
    - Copy the code below and paste it inside a new file (name it as SectionLNseatwork2.html). Place this file in the same location where the .md file is saved. 
    - Change the content values of the meta tags to your names for author/s and the date today for revised.
    - Please do the following tasks that will ask you to reposition HTML elements then answer the guided question for each task on the .md file. Commit changes to the .md file and to the .html file as well.
    **- This seatwork is worth 20pts and should be submitted by the end of the period** The link to [KHub submission bin](https://khub.mc.pshs.edu.ph/mod/assign/view.php?id=15481).
      - Submit the links to your .md file and .html file.

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="author" content="<your names>" />
  <meta name="revised" content="<date today>" />
  <style>
    body { font-family: Arial, sans-serif; }
    .header, .footer {
      background: lightblue;
      padding: 10px;
    }
    .footer {
       opacity: 0.5;
    }
    .sidebar {
      background: lightgreen;
      width: 150px;
      height: 200px;
    }
    .content {
      background: lightyellow;
      width: 300px;
      height: 200px;
    }    
  </style>
</head>
<body>
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="content">Main Content</div>
  <div class="footer">Footer</div>
</body>
</html>
```
### Step 1 (Static vs Relative):

- Add in css ```position: relative; top: 20px; left: 20px;``` to .sidebar.

- Guided Question: What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

  - *Answer:* The element moved 20 pixels down and 20 pixels to the right relative to the static positioning.

### Step 2 (Fixed):

- Add in css ```position: fixed; bottom: 0; width: 100%;``` to .footer.

- Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

  - *Answer:* When scrolling down the page, the footer stays within the same position instead of moving down. This is because the fixed positioning is relative to the viewport, keeping it in place while scrolling.

### Step 3 (Absolute):

- Add in css ```position: absolute; top: 66px; left: 200px;``` to .content.

- Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

  - *Answer:* Absolute positioning moves an element relative to the nearest relative positioned ancestor. It is taken out of the layout meaning that its static position no longer exists, allowing it to overlap with other elements. Compared to fixed, the absolute positioning is not relative to the viewport but rather the nearest relative poisitioned ancestor.

### Step 4 : (Absolute)

- Add in html ```<div class="notice">Notice!</div>``` and include the css below:

```css
.notice {
    position: absolute;
    top: 60px;
    left: 400px;
    background: orange;
    padding: 10px;
    z-index: 2;
}
```

- Give .content a z-index: 1.

- Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

  - *Answer:* The z-index determines the layering of the elements. It determines which element appears on top of the other. The element with the larger z-index will appear over the element with the lower z-index. In this case, the notice has a higher z-index so it appears on top of the content. If the z-indexes were swapped, then the notice would be hidden behind the main content.

- Challenge: 
    * What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).

      - *HTML*  
        ```html
        <div class="content">Main Content
          <div class="notice">Notice!</div>
        </div>
        ```

      - *CSS*
        ```css
        .notice {
            position: absolute;
            top: 0px;
            right: 0px;
            background: orange;
            padding: 10px;
            z-index: 2;
        }
        ```

    * Try to change the position of .content to relative then to fixed. What do you observed each time?

      - *Answer:* When switching the positioning of the .content to relative, the box moves down. This is because when using relative, it is still considering for the original static position of the .content. Since its original static posiion was below the sidebar, the positioning applies to the area below the sidebar rather than relative to the parent element.

      - *Answer:* On the other hand, when switching the positioning of .content to fixed, the box returns to its position when it was set to absolute except when scrolling the box stays since it is positioned relative to the viewport rather than relative to the parent element.

    * What do you observe on about the effect of z-index on .notice and .content boxes?

      - *Answer:* The z-index determines the layering of the .notice and .content boxes. It determines which one appears on top of the other.

3. Please answer the following reflection questions (15 minutes)

    a. Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?

      - Static is the default position value. Relative is positioning the element relative to the original static value. Absolute is positioning an element relative to the nearest positioned ancestor. Fixed is positioning an element relative to the viewport.

    b. How does absolute positioning depend on its parent element?

      - The values inputted are the amount of space from the sides of the parent element.

    c. How do you differentiate sticky from fixed (you can research on sticky)?

      - Sticky loads on its original static position but stays fixed once a certain threshold is met when scrolling.

    d. If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.

      - Positioning makes arranging sections a lot easier. The parent box containing all of the information can use relative positioning then each item within it can use absolute positioning. Maybe things like a navigation bar or a table of events can be placed using absolute positioning relative to their parent container. Certain reminders or important information for each event can use z-indexes to let them layer on top of the placed information.