/* eslint-disable no-unused-vars */
import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
function App() {
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);

  console.log(resData);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setLoading(true);
    setResData(null);
    axios
      .post("http://localhost:5000/predict", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        setLoading(false);
        setResData(res.data);
        if (res.data.vehicleMake) {
          document.getElementById("my_modal_3").showModal();
        }
      })
      .catch((err) => {
        console.log(err);
        window.alert(err.error);
      });
  };

  return (
    <>
      <h1>Predict Your Result</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">fuelType</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("fuelType", {
              required: "Provide the value of fuelType",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.fuelType && (
            <p className="mt-2 text-red-400">{errors.fuelType.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">rating</span>
          </label>
          <input
            type="number"
            {...register("rating", {
              required: "Provide the value of rating",
            })}
            step="0.01"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
          {errors.rating && (
            <p className="mt-2 text-red-400">{errors.rating.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">renterTripsTaken</span>
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Type here"
            {...register("renterTripsTaken", {
              required: "Provide the value of renterTripsTaken",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.renterTripsTaken && (
            <p className="mt-2 text-red-400">
              {errors.renterTripsTaken.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">reviewCount</span>
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Type here"
            {...register("reviewCount", {
              required: "Provide the value of reviewCount",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.reviewCount && (
            <p className="mt-2 text-red-400">{errors.reviewCount.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">locationCity</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("locationCity", {
              required: "Provide the value of locationCity",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.locationCity && (
            <p className="mt-2 text-red-400">{errors.locationCity.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">locationCountry</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("locationCountry", {
              required: "Provide the value of locationCountry",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.locationCountry && (
            <p className="mt-2 text-red-400">
              {errors.locationCountry.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">locationLatitude</span>
          </label>
          <input
            placeholder="Type here"
            {...register("locationLatitude", {
              required: "Provide the value of locationLatitude",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.locationLatitude && (
            <p className="mt-2 text-red-400">
              {errors.locationLatitude.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">locationLongitude</span>
          </label>
          <input
            placeholder="Type here"
            {...register("locationLongitude", {
              required: "Provide the value of locationLongitude",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.locationLongitude && (
            <p className="mt-2 text-red-400">
              {errors.locationLongitude.message}
            </p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">locationState</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("locationState", {
              required: "Provide the value of locationState",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.locationState && (
            <p className="mt-2 text-red-400">{errors.locationState.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">rateDaily</span>
          </label>
          <input
            type="number"
            step="0.01"
            placeholder="Type here"
            {...register("rateDaily", {
              required: "Provide the value of rateDaily",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.rateDaily && (
            <p className="mt-2 text-red-400">{errors.rateDaily.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">vehicleType</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            {...register("vehicleType", {
              required: "Provide the value of vehicleType",
            })}
            className="input input-bordered w-full max-w-xs"
          />
          {errors.vehicleType && (
            <p className="mt-2 text-red-400">{errors.vehicleType.message}</p>
          )}
        </div>
        <input
          className="btn btn-outline mt-5"
          type="submit"
          disabled={loading}
          value={loading ? "Processing" : "Submit"}
        />
      </form>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              onClick={() => setResData(null)}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Predicted Car Name:{" "}
            <span className="text-orange-500">{resData?.vehicleMake}</span>
          </p>
          <p className="py-4">
            Predicted Model Name:{" "}
            <span className="text-orange-500">{resData?.vehicleModel}</span>
          </p>
        </div>
      </dialog>
    </>
  );
}

export default App;
