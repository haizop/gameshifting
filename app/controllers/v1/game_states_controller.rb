module V1
  class GameStatesController < ApplicationController

    def create
      game = Game.find(params[:game_id])
      game_shift = GameShift.new(game, game_shift_params)
      if game_shift.valid?
        render json: setup
      else
        render status: 422
      end
    end

    def index
      setups = GameState.where("game_id = ?", params[:game_id])
      render json: setups
    end

    def show
      setup = GameState.find(params[:setup_id])
      render json: setup
    end

    private

    def game_shift_params

    end
  end
end
