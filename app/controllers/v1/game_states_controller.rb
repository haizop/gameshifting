module V1
  class GameStatesController < ApplicationController

    # def create
    #   game = Game.find(params[:game_id])
    #   game_shift = GameShift.new(game, game_shift_params)
    #   if game_shift.valid?
    #     render json: game_state
    #   else
    #     render status: 422
    #   end
    # end

    # def index
    #   game_states = GameState.where("game_id = ?", params[:game_id])
    #   render json: game_states
    # end

    def show
      game_state = GameState.last
      render json: game_state
    end

    private

    def game_shift_params
      params.require(:game_state).permit(:game_state)
    end
  end
end
