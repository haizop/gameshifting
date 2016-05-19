module V1
  class GamesController < ApplicationController

    def create
      game = Game.new(game_params)
      if game.save
        game.game_users.create(user: current_user)
        render json: {game: game, game_shift: game.game_shifts.last}
      else
        render json: {
          error: game.errors.full_messages.to_sentence
        }, status: 422
      end
    end

    def destroy
      current_game.destroy
      render status: 200
    end

    def show
      game_shift = current_game.game_shifts.last
      render json: {game: current_game, game_shift: game_shift}
    end

    def update
      if current_game.update(game_params)
        render json: current_game
      else
        render json: {
          error: current_game.errors.full_messages.to_sentence
        }, status: 422
      end
    end

    private

    def current_game
      current_game ||= Game.find(params[:id])
    end

    def game_params
      params.require(:game).permit(:id, :name, :description)
    end
  end
end
