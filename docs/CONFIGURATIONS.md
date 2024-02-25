# Pre Configurations  

> 🚧 Do note that this project is still on development, it **might** have impact changes, including this configurations method.  

!> Also note, that I think the current configuration method is considered **NOT SAFE**. Why ? because it still on development, and I need to record the changes to version control, and the environment data will be recorded too. *"Then why you use this ?"*, hehe, I build this while learning Node and TS environment too, so, maybe soon if I have any idea to secure it more safe, I'll do it. Though, you may provide some feedback / suggestion for this, I may be appreciate that 💖.

As of current version, I put some global configurations needed for the project on a Typescript file in : `./src/env.ts`.  
You can do several things below :  

- Changing Bot name, short name, or codename (used for watermarking sticker author, etc.)
- Storing imgBBKey (needed for Image to Sticker built-in feature)

For `imgBBKey`, you can retrieve the key from [here](https://api.imgbb.com/), but you may need to sign up first if you didn't have any ImgBB account before.