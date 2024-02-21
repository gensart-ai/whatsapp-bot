# Pre Configurations  

> 🚧 Do note that this project is still on development, it **might** have impact changes, including this configurations method.  

As of current version, I put some global configurations needed for the project on a Typescript file in : `./src/env.ts`.  
You can do several things below :  

- Changing Bot name, short name, or codename (used for watermarking sticker author, etc.)
- Storing imgBBKey (needed for Image to Sticker built-in feature)

For `imgBBKey`, you can retrieve the key from [here](https://api.imgbb.com/), but you may need to sign up first if you didn't have any ImgBB account before.