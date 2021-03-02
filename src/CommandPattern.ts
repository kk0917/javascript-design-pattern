(() => {

  const CarManager = {
    requestInfo: (model: string, id: number) => {
      return `The information for ${model} with ID ${id} is foobar`;
    },

    buyVehicle: (model: string, id: number) => {
      return `You have successfully purchased Item ${id}, a ${model}`;
    },

    arrangeViewing: (model: string, id: number) => {
      return `You have successfully booked a viewing of ${model} ( ${id} )`;
    }
  }

  CarManager.buyVehicle('Ford Escort', 453543);
})();

