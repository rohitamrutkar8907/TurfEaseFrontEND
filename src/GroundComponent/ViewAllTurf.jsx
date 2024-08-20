import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import Carousel from "../page/Carousel";
import GroundCard from "./GroundCard";

const ViewAllTurf = () => {
  const [grounds, setGrounds] = useState([]);

  useEffect(() => {
    const getAllGrounds = async () => {
      const allGrounds = await retrieveAllGrounds();
      if (allGrounds) {
        setGrounds(allGrounds.grounds);
      }
    };

    getAllGrounds();
  }, []);

  const retrieveAllGrounds = async () => {
    const response = await axios.get(`${config.server}/api/ground/fetch`);

    return response.data;
  };

  return (
    <div className="container-fluid mb-2">
      <Carousel />

      <div className="mt-2 mb-5">
        <div className="row mt-4">
          <div className="col-sm-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {grounds.map((ground) => {
                return <GroundCard item={ground} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllTurf;
