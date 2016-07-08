module V1
  class GameStatesController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create, :update]
    wrap_parameters :game_state, include: [:board, :users]

    def create
      game = Game.last
      game_state = game.game_states.new(state: params[:game_state])

      if game_state.save
        render json: game_state
      else
        render json: {
          error: game_state.errors.full_messages.to_sentence
        }, status: 422
      end
    end

    # def index
    #   game_states = GameState.where("game_id = ?", params[:game_id])
    #   render json: game_states
    # end

    def show
      game_state = Game.last.game_states.last
      render json: game_state.state
    end
  end
end
