module V1
  class BoardStatesController < ApplicationController

    def create
      game = Game.find(params[:game_id])
      setup = game.setups.new(game_set: game_set)
      if setup.save
        render json: setup
      else
        render status: 422
      end
    end

    def index
      setups = BoardState.where("game_id = ?", params[:game_id])
      render json: setups
    end

    def show
      setup = BoardState.find(params[:setup_id])
      render json: setup
    end
  end
end
