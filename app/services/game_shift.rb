class GameShift

  def initialize(game, setup)
    @game = game
    @setup = setup
    create_game_state
  end

  def valid?
    @game_state.valid?
  end

  private

  def create_game_state
    @game_state = @game.game_states.create!(setup: @setup)
  end
end
