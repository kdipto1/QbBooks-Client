import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type book = {
  name: string;
  author: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  category: string;
  date: Date;
};
const AddBookDB = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<book>();
  const onSubmit = handleSubmit(async (data: book) => {
    const url = `http://localhost:5000/addBook`;
    await axios
      .post(url, data)
      .then((response) => {
        const { data } = response;
        console.log(data);
        if (data) {
          toast.success("Book added to database");
          reset();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(data);
  });
  return (
    <section className="container mx-auto">
      <div className="mt-10">
        <div className="card p-4 text-center bg-base-100 mx-auto shadow-xl">
          <h2 className="font-bold text-2xl text-primary my-2">
            Add book to database
          </h2>
          <form onSubmit={onSubmit}>
            {/*  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <input
                  className="input input-bordered input-primary  w-full max-w-xs "
                  type="text"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Please add book name",
                    },
                  })}
                  placeholder="Book name"
                />
                <label className="label">
                  {errors?.name?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.name.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              <div>
                <input
                  className="input input-bordered input-primary w-full max-w-xs "
                  type="text"
                  {...register("author", {
                    required: {
                      value: true,
                      message: "Please add author name",
                    },
                  })}
                  placeholder="author name"
                />
                <label className="label">
                  {errors?.author?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.author.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              <div>
                <input
                  className="input input-bordered input-primary w-full max-w-xs "
                  type="text"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Please input description",
                    },
                  })}
                  placeholder="description"
                />
                <label className="label">
                  {errors?.description?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.description.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              {/*  */}
              <div>
                <input
                  className="input input-bordered input-primary w-full max-w-xs "
                  type="text"
                  {...register("image", {
                    required: {
                      value: true,
                      message: "Please input image address",
                    },
                  })}
                  placeholder="Please input image address"
                />
                <label className="label">
                  {errors?.image?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.image.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              {/*  */}
              <div>
                <input
                  className="input input-bordered input-primary w-full max-w-xs "
                  type="number"
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "Please input quantity",
                    },
                  })}
                  placeholder="quantity"
                />
                <label className="label">
                  {errors?.quantity?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.quantity.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              <div>
                <input
                  className="input input-bordered input-primary w-full max-w-xs "
                  type="number"
                  {...register("price", {
                    required: {
                      value: true,
                      message: "Please input price",
                    },
                  })}
                  placeholder="price"
                />
                <label className="label">
                  {errors?.price?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.price.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              {/*  */}
              <div>
                <label htmlFor="category">Please select category:</label>
                <br />
                <select
                  id="category"
                  className="input input-bordered input-primary w-full max-w-xs "
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Please select category",
                    },
                  })}
                  // options={[
                  //   { label: "Female", value: "female" },
                  //   { label: "Male", value: "male" },
                  //   { label: "Other", value: "other" },
                  // ]}
                >
                  <option disabled>Select category</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                  <option value="programming">Programming</option>
                  <option value="engineering">Engineering</option>
                </select>
                <label className="label">
                  {errors?.category?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors?.category.message}
                    </span>
                  )}
                </label>
                <br />
              </div>
              <div>
                <label htmlFor="date">Please select publish date:</label>
                <br />
                <input
                  id="date"
                  className="input input-bordered input-primary  w-full max-w-xs "
                  type="date"
                  {...register("date", {
                    valueAsDate: true,
                  })}
                  placeholder="Publish date"
                />
                <br />
              </div>
              {/*  */}
            </div>
            <input className="btn btn-wide btn-primary my-2" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBookDB;
