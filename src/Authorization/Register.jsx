import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const imageAPI = import.meta.env.VITE_IMAGE_API;

  const handleCreateUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;

    // Function to upload image to ImgBB
  const uploadImageToImgBB = async(imageFile) => {
    const imageData = new FormData()
    const imageMain = imageData.append('image', imageFile)

    const response = await fetch(`https://api.imgbb.com/1/upload?${imageAPI}`,{
      method: 'POST',
      body: imageMain
    })
    const data = await response.json()
    if(data.success) {
      return data.data.url
    }

  }
    try {
      // Create user in Firebase
      const result = await createUser(email, password);
      const user = result.user;

      // Upload image to ImgBB
      const imageURL = await uploadImageToImgBB(image);

      // Update the user's profile with the name and image URL
      await updateProfile(user, {
        displayName: name,
        photoURL: imageURL,
      });

      console.log("User profile updated successfully");
    } catch (err) {
      console.error("Error:", err.message);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleCreateUser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                name="image"
                type="file"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
