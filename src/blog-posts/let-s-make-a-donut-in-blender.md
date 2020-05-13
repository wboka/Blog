---
date: 2020-04-29T12:41:58-04:00
layout: post
hero_image: ''
title: Let's Make a Donut in Blender
categories:
- 3D Models
tags:
- 3d
- donut
- blender
draft: false

---
## Let's Make a Donut in Blender

I'm typing up the actions in this video from [Blender Guru on YouTube](https://www.youtube.com/user/AndrewPPrice "Blender Guru's YouTube Channel"). The titles in this article do NOT match up to his videos.

### Part 1: Making the Donut

[Video](https://www.youtube.com/watch?v=RaT-uG5wgUw&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U&index=3 "Part 2, Level 1: Modelling - Beginner Blender Tutorial Series")

 1. Enter **Object** mode
 2. Press `shift+a` to add a **mesh**
 3. Select _Torus_
 4. Set **Major Radius** to _5cm_
 5. Set **Minor Radius** to _2.5cm_
 6. Set **Major Segments** to _26_
 7. Set **Minor Segments** to _12_
 8. Rename the object to "Donut" or whatever you want
 9. Enter **Edit** mode
10. Turn on **Proportional Editing.**
    * Hot key is **O**
11. Select a vertex
12. Press `g` to move it
13. Scroll up/down to adjust the proportion being moved
14. Repeat steps 8-10 for a few areas around the donut
15. Enter **Object** mode
16. Right-click the donut and select **Shade Smooth**
17. Add a **Subdivision Surface** modifier
18. **Subdivision** settings
    1. _Render: 2_
    2. _Viewport_: 1
    3. _Quality_: 3
    4. _Use Creases_ is checked
    5. _Catmull-Clark_ is selected

### Part 2: Making the Icing

[Video](https://www.youtube.com/watch?v=R2qjqqfkH6E&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U&index=4 "Part 3, Level 1: Modelling - Beginner Blender Tutorial Series")

1. Press `alt+z` to enter **X-Ray** mode
2. Select the top half of the donut
3. **Duplicate** the selection with `shift+d`
4. Press `esc` to keep the duplicated part right on top of the donut
5. Press `p` to separate the new object from the donut
6. Rename the new object to "Icing" or what ever you want
7. Add the **Solidify** modifier
8. Change **Solidify** settings
   1. _Offset_: 1
   2. **Thickness**: 0.0025m
9. Move **Solidify** modifier up above the **Subdivision Surface** modifier

### Part 3: Making the Icing 2

1. Select icing mesh in **Edit** mode by pressing `a`
2. `Right-click` the mesh and select **Subdivide**
3. Change **Smoothness** to _1_
4. More to come
