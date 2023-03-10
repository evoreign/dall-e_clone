
# Dall-e clone

A MERN based website that generate image using open AI DALL-E API


## API Reference

#### Create post

```http
  POST /api/v1/post
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name` | `string` | **Required**. Name of the prompt creator |
| `prompt` | `string` | **Required**. Image prompt |
| `photo` | `string` | **Required**. Resulted image url from cloudinary |

#### Get image, calling open AI API you can lookup open ai documentation too for this

```http
  GET /api/v1/dalle
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `prompt`      | `string` | **Required**. Prompt |
| `N`      | `integer` | **Required**. how many image it generate |
| `size`      | `string` | **Required**. size of the image, 256, 512, or 1024 |
| `response format`      | `string` | **Required**. whats the returns |



## Acknowledgements

 - [Code](https://github.com/adrianhajdin/project_ai_mern_image_generation)



## Roadmap

- Add user authentication

- Add like function to each post

- implement credit system so i can release it to public without going broke

- upscale the image so user can generate 256 from open ai and upscale it to 512 for tiny bit of credit or generate 1024 to what ever they want
<<<<<<< HEAD


=======
>>>>>>> origin/main
