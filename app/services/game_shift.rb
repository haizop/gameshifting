class GameShift

  def initialize(game, params)
    @game = game
    @params = params
    create_game_state
  end

  def valid?
    @game_state.valid?
  end

  private

  def create_game_state
    @game_state = @game.game_states.create!(setup: @params)
  end
end
