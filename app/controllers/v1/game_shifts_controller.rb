module V1
  class GameShiftsController < ApplicationController

    def create
      game = Game.find(params[:game_id])
      game_shift = game.game_shifts.new(game_set: game_set)
      if game_shift.save
        render json: game_shift
      else
        render status: 422
      end
    end

    def index
      game_shifts = GameShift.where("game_id = ?", params[:game_id])
      render json: game_shifts
    end

    def show
      game_shift = GameShift.find(params[:game_shift_id])
      render json: game_shift
    end
  end
end
