module V1
  class GamesController < ApplicationController

    def create
      game = Game.new(game_params)
      if game.save
        # game.game_users.create(user: current_user)
        game_state = game.game_states.create!(FactoryGirl.attributes_for(:game_state))
        render json: {game: game, setup: game_state.setup}
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
      setup = current_game.game_states.last.setup
      render json: {game: current_game, setup: setup}
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
      params.require(:game).permit(:name, :description)
    end
  end
end
