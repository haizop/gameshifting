# == Schema Information
#
# Table name: sessions
#
#  id          :integer          not null, primary key
#  name        :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Session < ActiveRecord::Base
  has_many :users, through: :session_roles
  has_many :game_shifts, dependent: :destroy

  def current
    self.game_shifts.last
  end

  def jump_to(game_shift_id)
    self.game_shifts.find(game_shift_id)
  end

  def next(game_shift_id)
    self.game_shifts.find(game_shift_id + 1)
  end

  def previous(game_shift_id)
    self.game_shifts.find(game_shift_id - 1)
  end
end
